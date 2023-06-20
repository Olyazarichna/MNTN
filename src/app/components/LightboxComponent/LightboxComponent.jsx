import styles from "./LightboxComponent.module.scss";
import Lightbox from "react-spring-lightbox";

const LightboxComponent = ({
  isOpen,
  images,
  currentImage,
  closeLightbox,
  gotoNext,
  gotoPrevious,
}) => {
  return (
    <Lightbox
      isOpen={isOpen}
      onPrev={gotoPrevious}
      onNext={gotoNext}
      images={images}
      onClose={closeLightbox}
      currentIndex={currentImage}
      renderHeader={() => (
        <button className={styles.closeBtn} onClick={closeLightbox}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m18 18-6-6m0 0L6 6m6 6 6-6m-6 6-6 6"
            />
          </svg>
        </button>
      )}
      renderPrevButton={({ canPrev }) => {
        return (
          canPrev && (
            <button className={styles.lightboxBtn} onClick={gotoPrevious}>
              <svg
                className={styles.btnRL}
                xmlns="http://www.w3.org/2000/svg"
                width="39"
                height="68"
              >
                <path d="M37.535 2.18a5 5 0 0 1 0 7.07L12.785 34l24.75 24.75a5 5 0 0 1-7.07 7.07L2.18 37.535a5 5 0 0 1 0-7.07L30.465 2.18a5 5 0 0 1 7.07 0Z" />
              </svg>
            </button>
          )
        );
      }}
      renderNextButton={({ canNext }) => {
        return (
          canNext && (
            <button className={styles.lightboxBtn} onClick={gotoNext}>
              <svg
                className={styles.btnRL}
                xmlns="http://www.w3.org/2000/svg"
                width="39"
                height="68"
              >
                <path d="M1.465 2.18a5 5 0 0 0 0 7.07L26.215 34 1.465 58.75a5 5 0 0 0 7.07 7.07L36.82 37.535a5 5 0 0 0 0-7.07L8.535 2.18a5 5 0 0 0-7.07 0Z" />
              </svg>
            </button>
          )
        );
      }}
      className={styles.box}
    />
  );
};

export default LightboxComponent;
