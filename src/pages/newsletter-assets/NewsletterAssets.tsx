import React, { useEffect, useState } from "react";
import styles from "./newsletter-assets.module.scss";
import { SubpageWrapper } from "../../components/subpage-wrapper/SubpageWrapper";
import { HeadComponent } from "../../components/head-component/HeadComponent";
import { newsletterAssets } from "../../common/data/newsletterAssetsList";

const toAbsoluteUrl = (src: string) => new URL(src, window.location.origin).href;

const toEmailImgTag = (src: string, alt: string) => {
  const url = toAbsoluteUrl(src);
  return `<img src="${url}" alt="${alt}" width="600" style="display:block;width:100%;max-width:600px;height:auto;border:0;" />`;
};

export const NewsletterAssets = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const copyText = async (key: string, text: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedKey(key);
    window.setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <HeadComponent
      title={__("newsletterAssetsPage.meta.title")}
      description={__("newsletterAssetsPage.meta.description")}
      image={"../../assets/images/Newsletter-images/logo.png"}
    >
      <SubpageWrapper
        title={__("newsletterAssetsPage.header")}
        bottomMargin={true}
        compact={true}
      >
        <>
          <p className={styles.intro}>{__("newsletterAssetsPage.intro")}</p>
          <ul className={styles.grid}>
            {newsletterAssets.map((asset) => {
              const absoluteUrl = toAbsoluteUrl(asset.src);
              const urlCopyKey = `${asset.id}-url`;
              const htmlCopyKey = `${asset.id}-html`;
              
              return (
                <li className={styles.card} key={asset.id}>
                  <div className={styles.preview}>
                    <img src={asset.src} alt={asset.alt} />
                  </div>
                  <div className={styles.meta}>
                    <h2 className={styles.fileName}>{asset.fileName}</h2>
                    <label className={styles.label}>
                      {__("newsletterAssetsPage.urlLabel")}
                      <input
                        className={styles.urlInput}
                        type="text"
                        readOnly
                        value={absoluteUrl}
                        onFocus={(event) => event.currentTarget.select()}
                      />
                    </label>
                    <div className={styles.actions}>
                      <button
                        type="button"
                        className={styles.button}
                        onClick={() =>
                          copyText(urlCopyKey, absoluteUrl)
                        }
                      >
                        {copiedKey === urlCopyKey
                          ? __("newsletterAssetsPage.copied")
                          : __("newsletterAssetsPage.copyUrl")}
                      </button>
                      <button
                        type="button"
                        className={styles.button}
                        onClick={() =>
                          copyText(
                            htmlCopyKey,
                            toEmailImgTag(asset.src, asset.alt),
                          )
                        }
                      >
                        {copiedKey === htmlCopyKey
                          ? __("newsletterAssetsPage.copied")
                          : __("newsletterAssetsPage.copyHtml")}
                      </button>
                      <a
                        className={styles.link}
                        href={asset.src}
                        download={asset.fileName}
                      >
                        {__("newsletterAssetsPage.download")}
                      </a>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </>
      </SubpageWrapper>
    </HeadComponent>
  );
};
