#!/usr/bin/env bash
# One-off: download the landing page assets from Figma into public/.
# The links are temporary (valid ~7 days from 2026-11-10). Delete this script after running it.
set -euo pipefail
cd "$(dirname "$0")/.."
B=https://www.figma.com/api/mcp/asset
mkdir -p public/images/partners
tmp=$(mktemp -d)

get() { # url dest
  curl -fsSL "$1" -o "$2" && echo "ok   $2"
}
# desktop asset -> destination ; mobile asset is compared to it
pair() { # desktop_id mobile_id ext dest
  get "$B/$1.$3" "$4"
  curl -fsSL "$B/$2.$3" -o "$tmp/m" && { cmp -s "$tmp/m" "$4" && echo "     mobile identical" || echo "     !! MOBILE DIFFERS: $4"; }
}

pair 830f4b0d-6ed8-4c82-9915-c1acbce91cdd fcbb2598-660f-4836-92aa-a19c50343898 png public/images/hero-r7-launch.png
pair 88945ef1-4c24-4eaa-87e9-a4d61cff35d3 982918ba-f2da-4de3-8ef2-a081da6ee1d0 png public/images/r8-alcyone.png
pair 9c8cfd33-0ceb-4e8a-8f50-6e71c5e84f49 91db4ae7-2a66-4b04-9a6e-c175b1177ffe png public/images/r7-together.png
pair 6d2d5ac0-bd24-4fc0-a539-896ef4ec4fb9 c9849039-7e35-48b5-80b6-f2b69f95feff png public/images/team-far-out.png
pair 283bcb2a-c2f1-4c9b-aa90-542659b520c7 3231948a-a477-4113-a08f-1c4a58a74c83 png public/images/partners/politechnika-wroclawska.png
pair c0179213-bdaf-4b0f-81b9-66365b3ac9d5 259271dc-308f-4b8d-a558-22507df65087 png public/images/partners/ansys.png
pair cfd6665b-f889-4a6e-ac33-2eef84d05288 cae5ef9d-e677-4938-8970-82362a9964a7 png public/images/partners/scanway-space.png
pair 70a5ba54-1d36-498a-bf65-9d605d261525 9902ae47-0ba7-4eb8-a056-e24d5a40662d png public/images/partners/air-products.png
pair 62bbb7cf-19ff-4732-8bc2-672e15422f89 d3e18e0a-0889-4447-89c6-c56d27815990 svg public/images/pwr-in-space-logo.svg
pair 860095a7-bb3a-4b94-b954-1c86883104f0 ed6b797b-c51f-426a-91f2-2d27a2c477c3 png public/images/planet.png
pair bcf14bf2-d2d7-44a3-a835-011b365f6117 19e043d2-25ef-4fe0-9881-c4a074fb49ed svg public/images/pwr-in-space-logo-footer.svg
# footer frames use their own copy of the footer logo: confirm it is the same file
for id in f1f5e06e-0da3-42a1-a199-0bc0dafc2826 696ff8d8-b4ab-4ded-bcbe-48d1b3486e79; do
  curl -fsSL "$B/$id.svg" -o "$tmp/f" && { cmp -s "$tmp/f" public/images/pwr-in-space-logo-footer.svg && echo "     footer logo identical" || echo "     !! FOOTER LOGO DIFFERS ($id)"; }
done
echo done
