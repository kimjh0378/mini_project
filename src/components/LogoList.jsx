function LogoList ({logos}) {
  return (
    <div className="logoBox">
      {logos.map((logo, index)=> (
        <div key={logo.id} style={{marginBottom: "10px"}}>
          <div className="logoimg" style={ {
            backgroundImage: `url(${logo.image})`,
            width: '450px',
            height: '450px',
            backgroundSize: '450px',
            backgroundRepeat: "no-repeat",
            backgroundPosition: 'left'
          }}>
          </div>
        </div>
      )) }
      </div>
  );
}

export default LogoList;