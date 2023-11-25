import './Comunicaciones.css';

export function Comunicaciones() {
  return (
    <section id="Comunicaciones">
      <h2>Comunicaciones</h2>

      {/* Sección de publicaciones de Facebook */}
      <div className="noticias">
        <h3>Noticias</h3>
        {/* Aquí puedes insertar código para mostrar publicaciones de Facebook */}
        <div>
          <iframe
            title="Publicación de Facebook"
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fliderestransformadores.degalapa%2Fposts%2Fpfbid0vLraF2fSdazk1BHvF5Ny2Fgbr4XgWd7dsAGUgvJThPzjdWy8qmcXxRg2eGryYWZQl&show_text=true&width=500"
            style={{ border: 'none', overflow: 'hidden' }}
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
          <iframe
            title="Facebook Post"
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fliderestransformadores.degalapa%2Fposts%2Fpfbid0xi8eRnN9bKBqyThJ8vYMZqkPx6KctbuwLyUQdC5foUF7crTv1dga6orjuwRC6KCPl&show_text=true&width=500"
            style={{ border: 'none', overflow: 'hidden' }}
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>

      {/* Sección de encuestas */}
      <div className="encuestas">
        <h3>Encuestas e Inscripciones</h3>
        {/* Aquí puedes insertar enlaces a tus encuestas */}
        <p>
          Este atento a posibles aperturas de Inscripciones{' '}
          <a href="/encuesta1"></a>
        </p>
        {/* Puedes agregar más enlaces a encuestas según sea necesario */}
      </div>
    </section>
  );
}
