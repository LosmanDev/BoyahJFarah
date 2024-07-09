export default function Footer() {
  return (
    <>
      <footer className="footer bg-neutral text-neutral-content items-center p-4 sticky-bottom">
        <aside className="grid-flow-col items-center">
          <p>© {new Date().getFullYear()} - Boyah J Farah</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a href="https://www.linkedin.com/in/boyah-j-farah/" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2.5em"
              height="2.5em"
              viewBox="0 0 16 16"
            >
              <path
                fill="#eee8d6"
                fill-rule="evenodd"
                d="M3 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zm1.102 4.297a1.195 1.195 0 1 0 0-2.39a1.195 1.195 0 0 0 0 2.39m1 7.516V6.234h-2v6.579zM6.43 6.234h2v.881c.295-.462.943-1.084 2.148-1.084c1.438 0 2.219.953 2.219 2.766c0 .087.008.484.008.484v3.531h-2v-3.53c0-.485-.102-1.438-1.18-1.438c-1.079 0-1.17 1.198-1.195 1.982v2.986h-2z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <a href="https://x.com/Boyahfarah" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2.5em"
              height="2.5em"
              viewBox="0 0 448 512"
            >
              <path
                fill="#eee8d6"
                d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm297.1 84L257.3 234.6L379.4 396h-95.6L209 298.1L123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5l78.2-89.5zm-37.8 251.6L153.4 142.9h-28.3l171.8 224.7h26.3z"
              ></path>
            </svg>
          </a>

          <a href="https://www.instagram.com/boyahjfarah/" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2.5em"
              height="2.5em"
              viewBox="0 0 448 512"
            >
              <path
                fill="#eee8d6"
                d="M224 202.66A53.34 53.34 0 1 0 277.36 256A53.38 53.38 0 0 0 224 202.66m124.71-41a54 54 0 0 0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31 6.43a54 54 0 0 0-30.41 30.41c-8.28 21-6.43 71.05-6.43 94.33s-1.85 73.27 6.47 94.34a54 54 0 0 0 30.41 30.41c21 8.29 71 6.43 94.31 6.43s73.24 1.93 94.3-6.43a54 54 0 0 0 30.41-30.41c8.35-21 6.43-71.05 6.43-94.33s1.92-73.26-6.43-94.33ZM224 338a82 82 0 1 1 82-82a81.9 81.9 0 0 1-82 82m85.38-148.3a19.14 19.14 0 1 1 19.13-19.14a19.1 19.1 0 0 1-19.09 19.18ZM400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h352a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48m-17.12 290c-1.29 25.63-7.14 48.34-25.85 67s-41.4 24.63-67 25.85c-26.41 1.49-105.59 1.49-132 0c-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61 0-132c1.29-25.63 7.07-48.34 25.85-67s41.47-24.56 67-25.78c26.41-1.49 105.59-1.49 132 0c25.63 1.29 48.33 7.15 67 25.85s24.63 41.42 25.85 67.05c1.49 26.32 1.49 105.44 0 131.88"
              />
            </svg>
          </a>
        </nav>
      </footer>
    </>
  );
}
