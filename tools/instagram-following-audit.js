(function () {
  "use strict";

  var APP_ID = "austin-instagram-audit";
  var STYLE_ID = APP_ID + "-styles";
  var QUERY_HASH = "3dec7e2c57367ef3da3d987d89f9dbc8";
  var PAGE_SIZE = 24;

  if (location.hostname !== "www.instagram.com" && location.hostname !== "instagram.com") {
    alert("Open instagram.com first, then paste this scanner code.");
    return;
  }

  var previousApp = document.getElementById(APP_ID);
  var previousStyle = document.getElementById(STYLE_ID);
  if (previousApp) {
    previousApp.remove();
  }
  if (previousStyle) {
    previousStyle.remove();
  }

  function element(tag, className, text) {
    var node = document.createElement(tag);
    if (className) {
      node.className = className;
    }
    if (typeof text === "string") {
      node.textContent = text;
    }
    return node;
  }

  function getCookie(name) {
    var entries = ("; " + document.cookie).split("; " + name + "=");
    return entries.length === 2 ? entries.pop().split(";").shift() : null;
  }

  function buildFollowingUrl(cursor) {
    var userId = getCookie("ds_user_id");
    if (!userId) {
      throw new Error("Could not read your Instagram session. Confirm you are signed in.");
    }

    var variables = {
      id: userId,
      include_reel: true,
      fetch_mutual: false,
      first: PAGE_SIZE
    };

    if (cursor) {
      variables.after = cursor;
    }

    return (
      "/graphql/query/?query_hash=" +
      QUERY_HASH +
      "&variables=" +
      encodeURIComponent(JSON.stringify(variables))
    );
  }

  function sleep(milliseconds) {
    return new Promise(function (resolve) {
      window.setTimeout(resolve, milliseconds);
    });
  }

  function download(filename, type, content) {
    var url = URL.createObjectURL(new Blob([content], { type: type }));
    var link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  function csvCell(value) {
    return '"' + String(value == null ? "" : value).replace(/"/g, '""') + '"';
  }

  var styles = document.createElement("style");
  styles.id = STYLE_ID;
  styles.textContent =
    "#" + APP_ID + "{position:fixed;inset:0;z-index:2147483647;display:flex;flex-direction:column;background:#101312;color:#edf1eb;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:14px;line-height:1.45}" +
    "#" + APP_ID + " *{box-sizing:border-box;letter-spacing:0}" +
    "#" + APP_ID + " .ia-header{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 18px;border-bottom:1px solid #28322c;background:#151a17;flex-wrap:wrap}" +
    "#" + APP_ID + " h1{font-size:18px;font-weight:650;line-height:1.2;margin:0;color:#edf1eb}" +
    "#" + APP_ID + " .ia-subtitle{color:#92a397;font-size:12px;margin:3px 0 0}" +
    "#" + APP_ID + " .ia-controls{display:flex;align-items:center;gap:8px;flex-wrap:wrap}" +
    "#" + APP_ID + " button{height:38px;padding:0 13px;border:1px solid #334038;border-radius:7px;background:#1d2521;color:#edf1eb;font:inherit;font-weight:550;cursor:pointer}" +
    "#" + APP_ID + " button:hover:not(:disabled){background:#28332d}" +
    "#" + APP_ID + " button:disabled{opacity:.42;cursor:not-allowed}" +
    "#" + APP_ID + " .ia-run{background:#52735c;border-color:#52735c}" +
    "#" + APP_ID + " .ia-run:hover:not(:disabled){background:#64866e}" +
    "#" + APP_ID + " .ia-close{color:#d9a9a5}" +
    "#" + APP_ID + " .ia-progress{height:5px;background:#1b231e}" +
    "#" + APP_ID + " .ia-progress-bar{height:100%;width:0;background:#71967b;transition:width .2s ease}" +
    "#" + APP_ID + " .ia-main{display:grid;grid-template-columns:270px 1fr;flex:1;min-height:0}" +
    "#" + APP_ID + " .ia-sidebar{padding:18px;border-right:1px solid #28322c;background:#131815;overflow:auto}" +
    "#" + APP_ID + " .ia-stat{padding:11px 12px;margin-bottom:9px;border:1px solid #28322c;border-radius:7px;background:#171e1a}" +
    "#" + APP_ID + " .ia-stat-label{display:block;color:#92a397;font-size:12px;margin-bottom:3px}" +
    "#" + APP_ID + " .ia-stat-value{font-size:24px;font-weight:650}" +
    "#" + APP_ID + " .ia-filters{display:grid;gap:11px;padding-top:16px}" +
    "#" + APP_ID + " .ia-filters label{display:flex;gap:9px;align-items:center;color:#d7ddd7}" +
    "#" + APP_ID + " input[type=checkbox]{width:16px;height:16px;accent-color:#71967b}" +
    "#" + APP_ID + " .ia-results{padding:18px;overflow:auto}" +
    "#" + APP_ID + " .ia-tools{display:flex;gap:10px;align-items:center;margin-bottom:15px}" +
    "#" + APP_ID + " .ia-search{width:min(340px,100%);height:40px;padding:0 12px;border:1px solid #334038;border-radius:7px;background:#151a17;color:#edf1eb;font:inherit}" +
    "#" + APP_ID + " .ia-status{margin:0 0 16px;color:#92a397}" +
    "#" + APP_ID + " .ia-list{display:grid;grid-template-columns:repeat(auto-fill,minmax(270px,1fr));gap:9px}" +
    "#" + APP_ID + " .ia-user{display:flex;align-items:center;gap:11px;min-width:0;padding:10px;border:1px solid #28322c;border-radius:7px;background:#151a17}" +
    "#" + APP_ID + " .ia-avatar{width:48px;height:48px;border-radius:50%;object-fit:cover;background:#222a25;flex:none}" +
    "#" + APP_ID + " .ia-user-body{min-width:0}" +
    "#" + APP_ID + " .ia-name{display:block;color:#edf1eb;font-weight:600;text-decoration:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}" +
    "#" + APP_ID + " .ia-name:hover{text-decoration:underline}" +
    "#" + APP_ID + " .ia-fullname{margin:2px 0 5px;color:#92a397;font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}" +
    "#" + APP_ID + " .ia-badges{display:flex;gap:4px;flex-wrap:wrap}" +
    "#" + APP_ID + " .ia-badge{padding:2px 6px;border-radius:999px;background:#242f28;color:#b9c6bc;font-size:11px}" +
    "#" + APP_ID + " .ia-empty{padding:38px 0;color:#92a397}" +
    "@media(max-width:720px){#" + APP_ID + " .ia-main{grid-template-columns:1fr}#" + APP_ID + " .ia-sidebar{border-right:0;border-bottom:1px solid #28322c}#" + APP_ID + " .ia-header{align-items:flex-start;flex-direction:column}}";
  document.head.appendChild(styles);

  var app = element("section");
  app.id = APP_ID;
  app.setAttribute("aria-label", "Instagram Following Audit");
  app.innerHTML =
    '<header class="ia-header">' +
    '<div><h1>Instagram Following Audit</h1><p class="ia-subtitle">Read-only scan. Results remain in this browser tab.</p></div>' +
    '<div class="ia-controls">' +
    '<button class="ia-run" data-action="run">Run Scan</button>' +
    '<button data-action="stop" disabled>Stop</button>' +
    '<button data-action="csv" disabled>CSV</button>' +
    '<button data-action="json" disabled>JSON</button>' +
    '<button class="ia-close" data-action="close">Close</button>' +
    "</div></header>" +
    '<div class="ia-progress"><div class="ia-progress-bar"></div></div>' +
    '<div class="ia-main"><aside class="ia-sidebar">' +
    '<div class="ia-stat"><span class="ia-stat-label">Scanned</span><strong class="ia-stat-value" data-output="scanned">0</strong></div>' +
    '<div class="ia-stat"><span class="ia-stat-label">Not following back</span><strong class="ia-stat-value" data-output="nonfollowers">0</strong></div>' +
    '<div class="ia-stat"><span class="ia-stat-label">Visible results</span><strong class="ia-stat-value" data-output="visible">0</strong></div>' +
    '<div class="ia-filters">' +
    '<label><input type="checkbox" data-filter="nonfollowers" checked> Only not following back</label>' +
    '<label><input type="checkbox" data-filter="verified" checked> Include verified</label>' +
    '<label><input type="checkbox" data-filter="private" checked> Include private</label>' +
    "</div></aside>" +
    '<div class="ia-results"><div class="ia-tools"><input class="ia-search" type="search" placeholder="Search username or name" aria-label="Search users"></div>' +
    '<p class="ia-status">Ready to scan your following list.</p><div class="ia-list"></div></div></div>';
  document.body.appendChild(app);

  var state = {
    users: [],
    running: false,
    cancelled: false,
    percentage: 0,
    status: "Ready to scan your following list.",
    request: null
  };

  var output = {
    scanned: app.querySelector('[data-output="scanned"]'),
    nonfollowers: app.querySelector('[data-output="nonfollowers"]'),
    visible: app.querySelector('[data-output="visible"]')
  };
  var runButton = app.querySelector('[data-action="run"]');
  var stopButton = app.querySelector('[data-action="stop"]');
  var csvButton = app.querySelector('[data-action="csv"]');
  var jsonButton = app.querySelector('[data-action="json"]');
  var searchInput = app.querySelector(".ia-search");
  var statusElement = app.querySelector(".ia-status");
  var listElement = app.querySelector(".ia-list");
  var progressElement = app.querySelector(".ia-progress-bar");

  function filteredUsers() {
    var query = searchInput.value.trim().toLowerCase();
    var onlyNonFollowers = app.querySelector('[data-filter="nonfollowers"]').checked;
    var includeVerified = app.querySelector('[data-filter="verified"]').checked;
    var includePrivate = app.querySelector('[data-filter="private"]').checked;

    return state.users.filter(function (user) {
      if (onlyNonFollowers && user.follows_viewer) {
        return false;
      }
      if (!includeVerified && user.is_verified) {
        return false;
      }
      if (!includePrivate && user.is_private) {
        return false;
      }
      if (!query) {
        return true;
      }
      return (
        String(user.username || "").toLowerCase().indexOf(query) !== -1 ||
        String(user.full_name || "").toLowerCase().indexOf(query) !== -1
      );
    });
  }

  function renderUser(user) {
    var row = element("article", "ia-user");
    var image = element("img", "ia-avatar");
    image.src = user.profile_pic_url;
    image.alt = "";
    var body = element("div", "ia-user-body");
    var link = element("a", "ia-name", user.username);
    link.href = "https://www.instagram.com/" + encodeURIComponent(user.username) + "/";
    link.target = "_blank";
    link.rel = "noreferrer";
    body.appendChild(link);
    body.appendChild(element("p", "ia-fullname", user.full_name || ""));
    var badges = element("div", "ia-badges");
    badges.appendChild(element("span", "ia-badge", user.follows_viewer ? "follows you" : "not following back"));
    if (user.is_verified) {
      badges.appendChild(element("span", "ia-badge", "verified"));
    }
    if (user.is_private) {
      badges.appendChild(element("span", "ia-badge", "private"));
    }
    body.appendChild(badges);
    row.appendChild(image);
    row.appendChild(body);
    return row;
  }

  function render() {
    var shown = filteredUsers().sort(function (left, right) {
      return String(left.username).localeCompare(String(right.username));
    });
    var nonFollowers = state.users.filter(function (user) {
      return !user.follows_viewer;
    });

    output.scanned.textContent = String(state.users.length);
    output.nonfollowers.textContent = String(nonFollowers.length);
    output.visible.textContent = String(shown.length);
    statusElement.textContent = state.status;
    progressElement.style.width = state.percentage + "%";
    runButton.disabled = state.running;
    stopButton.disabled = !state.running;
    csvButton.disabled = !state.users.length;
    jsonButton.disabled = !state.users.length;
    listElement.replaceChildren();

    if (!shown.length) {
      listElement.appendChild(element("p", "ia-empty", state.users.length ? "No users match these filters." : "Results will appear here after a scan."));
      return;
    }

    shown.forEach(function (user) {
      listElement.appendChild(renderUser(user));
    });
  }

  async function scan() {
    if (state.running) {
      return;
    }

    state.users = [];
    state.running = true;
    state.cancelled = false;
    state.percentage = 0;
    state.status = "Scanning following list...";
    render();

    var cursor = null;
    var hasNextPage = true;
    var total = 0;
    var userIds = new Set();

    try {
      while (hasNextPage && !state.cancelled) {
        state.request = new AbortController();
        var response = await fetch(buildFollowingUrl(cursor), {
          credentials: "include",
          signal: state.request.signal
        });

        if (!response.ok) {
          throw new Error("Instagram returned HTTP " + response.status + ".");
        }

        var json = await response.json();
        var following = json && json.data && json.data.user && json.data.user.edge_follow;
        if (!following) {
          throw new Error("Instagram's following response has changed or is unavailable.");
        }

        total = following.count || total;
        following.edges.forEach(function (edge) {
          if (edge.node && !userIds.has(edge.node.id)) {
            userIds.add(edge.node.id);
            state.users.push(edge.node);
          }
        });

        hasNextPage = Boolean(following.page_info && following.page_info.has_next_page);
        cursor = following.page_info && following.page_info.end_cursor;
        state.percentage = total
          ? Math.min(100, Math.round((state.users.length / total) * 100))
          : 0;
        state.status =
          "Scanning... " + state.users.length + (total ? " of " + total : "") + " accounts checked.";
        render();

        if (hasNextPage && !state.cancelled) {
          await sleep(950 + Math.floor(Math.random() * 850));
        }
      }

      if (state.cancelled) {
        state.status = "Scan stopped. Displaying the results collected so far.";
      } else {
        state.percentage = 100;
        state.status = "Scan complete. Exported files contain only the currently visible results.";
      }
    } catch (error) {
      if (state.cancelled && error.name === "AbortError") {
        state.status = "Scan stopped. Displaying the results collected so far.";
      } else {
        state.status = "Unable to finish scan: " + error.message;
        console.error("Instagram Following Audit:", error);
      }
    } finally {
      state.running = false;
      state.request = null;
      render();
    }
  }

  function exportJson() {
    download("instagram-following-audit.json", "application/json", JSON.stringify(filteredUsers(), null, 2));
  }

  function exportCsv() {
    var rows = filteredUsers().map(function (user) {
      return [
        user.id,
        user.username,
        user.full_name,
        !user.follows_viewer,
        user.is_verified,
        user.is_private,
        "https://www.instagram.com/" + user.username + "/"
      ].map(csvCell).join(",");
    });
    var header = ["id", "username", "full_name", "not_following_back", "is_verified", "is_private", "profile_url"]
      .map(csvCell)
      .join(",");
    download("instagram-following-audit.csv", "text/csv;charset=utf-8", header + "\n" + rows.join("\n"));
  }

  runButton.addEventListener("click", scan);
  stopButton.addEventListener("click", function () {
    state.cancelled = true;
    if (state.request) {
      state.request.abort();
    }
  });
  csvButton.addEventListener("click", exportCsv);
  jsonButton.addEventListener("click", exportJson);
  searchInput.addEventListener("input", render);
  app.querySelectorAll("[data-filter]").forEach(function (checkbox) {
    checkbox.addEventListener("change", render);
  });
  app.querySelector('[data-action="close"]').addEventListener("click", function () {
    state.cancelled = true;
    if (state.request) {
      state.request.abort();
    }
    app.remove();
    styles.remove();
  });

  render();
})();
