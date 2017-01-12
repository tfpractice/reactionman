const markup = `<!doctype html>
    <html>
      <head>
        <title>FilmRatr</title>
        <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
            <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
              <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/css/materialize.min.css">
                </head>
                <body>
                  <div id="root" style="background-color:#303030;"></div>
                   <script type="application/javascript" src=/manifest.js></script>
                   <script type="application/javascript" src=/vendor.js></script>
                   <script type="application/javascript" src=/app.js></script> 
                </body>
              </html> `;

export default (req, res) => res.send(markup);
