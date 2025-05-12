const BaseLayout = ({ children, pageTitle, siteName }) => {
  return (
    <html lang="ko">
      <head>
        <title>
          {pageTitle} | {siteName}
        </title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        <link rel="stylesheet" href="/static/css/styles.css" />
      </head>
      <body>
        {/* TODO: Header 컴포넌트로 분리 */}
        <main>{children}</main>
        {/* TODO: Footer 컴포넌트로 분리 */}
        <script src="/static/js/main.js"></script>
      </body>
    </html>
  );
};
