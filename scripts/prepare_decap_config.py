#!/usr/bin/env python3
"""Fill sandbox_v2/admin/config.yml placeholders for Decap GitHub Pages setup.

Usage:
  python3 scripts/prepare_decap_config.py \
    --repo USER/REPO \
    --site-url https://USER.github.io/REPO \
    --oauth-base-url https://oauth.example.com
"""

from __future__ import annotations

import argparse
from pathlib import Path

CONFIG_PATH = Path("sandbox_v2/admin/config.yml")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--repo", required=True)
    parser.add_argument("--site-url", required=True)
    parser.add_argument("--oauth-base-url", required=True)
    parser.add_argument("--branch", default="main")
    args = parser.parse_args()

    text = CONFIG_PATH.read_text(encoding="utf-8")
    text = text.replace("YOUR_GITHUB_USER/YOUR_REPO_NAME", args.repo)
    text = text.replace("https://YOUR_GITHUB_USER.github.io/YOUR_REPO_NAME", args.site_url)
    text = text.replace("https://YOUR_OAUTH_BROKER_DOMAIN", args.oauth_base_url)

    # branch line replacement (first matching)
    text = text.replace("branch: main", f"branch: {args.branch}", 1)

    CONFIG_PATH.write_text(text, encoding="utf-8")
    print(f"Updated {CONFIG_PATH}")


if __name__ == "__main__":
    main()
