import './QuienesSomos.css';

export function QuienesSomos() {
  const sectionStyle = {
    backgroundImage: `url('fondo-qs.jpg')`,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <section
      id="Quienes-Somos"
      style={sectionStyle}
    >
      <div className="div-qs">
        <h2 className="title-qs">¿Quienes Somos?</h2>
        <p className="text-qs">
          Somos un grupo dinámico y comprometido de jóvenes que formamos parte
          de la <strong>Liga Social Galapa</strong>, una iniciativa que nació en
          junio de 2017 con la firme convicción de ser agentes de cambio
          positivo en nuestra comunidad. Nos unimos con el propósito de abordar
          diversas problemáticas sociales que impactan directamente a la
          juventud, buscando soluciones innovadoras y fomentando el desarrollo
          integral de quienes forman parte de nuestro entorno.
        </p>
      </div>
      <div className="div-mv">
        <div className="div-m">
          <h2 className="title">Misión</h2>
          <p className="text">
            Trabajamos incansablemente para mitigar desafíos sociales,
            centrándonos en temas cruciales como salud y ambiente, salud sexual
            y reproductiva, política, consumo de sustancias psicoactivas,
            cutting, suicidio y bullying. Nuestra misión es promover un cambio
            significativo, no solo a través de la concienciación, sino también
            mediante la acción proactiva y la participación activa de la
            juventud.
          </p>
        </div>
        <div className="div-v">
          <h2 className="title">Visión</h2>
          <p className="text">
            En Liga Social Galapa, visualizamos un futuro donde cada joven de
            nuestra comunidad sea un agente de cambio proactivo y consciente,
            capaz de abordar desafíos sociales con empatía, creatividad y
            determinación. Nos esforzamos por construir una sociedad donde la
            juventud sea impulsora de transformaciones significativas,
            contribuyendo al desarrollo sostenible y al bienestar colectivo.
          </p>
        </div>
      </div>
    </section>
  );
}
