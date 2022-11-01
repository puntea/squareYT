// ==UserScript==
// @name         SquareYT
// @description  Get rid of Youtube's roundness. Square up.
// @version      1.0
// @author       Puntea
// @grant        GM_addStyle
// @match        https://www.youtube.com*/*
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle ( `
    ytd-thumbnail[size=medium] a.ytd-thumbnail,ytd-thumbnail[size=medium]:before {
    border-radius: 0;
    }

    ytd-thumbnail[size=large] a.ytd-thumbnail,ytd-thumbnail[size=large]:before {
    border-radius: 0;
    }

    ytd-thumbnail[size] ytd-thumbnail-overlay-time-status-renderer.ytd-thumbnail,ytd-thumbnail[size] ytd-thumbnail-overlay-button-renderer.ytd-thumbnail {
    border-radius: 0;
    }

    ytd-watch-metadata[modern-metapanel] #description.ytd-watch-metadata {
    border-radius: 0;
    }

    .yt-spec-button-shape-next--size-m.yt-spec-button-shape-next--segmented-start {
    border-radius: 0;
    }

    .yt-spec-button-shape-next--size-m.yt-spec-button-shape-next--segmented-end {
    border-radius: 0;
    }

    .yt-spec-button-shape-next--size-m {
    border-radius: 0;
    }

    yt-chip-cloud-chip-renderer[modern-chips][chip-style] {
    border-radius: 0;
    }

    yt-chip-cloud-chip-renderer {
    border-radius: 0;
    }

    #expander.ytd-comment-replies-renderer .dot.ytd-comment-replies-renderer {
    opacity: 0;
    }

` );
})();