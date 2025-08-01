function LogoList ({logos}) {
  return (
    <div className="logoBox">
      {logos.map((logo, index)=> (
        <div key={logo.id} style={{marginBottom: "10px"}}>
          <div className="logoimg" style={ {
            backgroundImage: `url(${logo.image})`,
            width: '440px',
            height: '440px',
            backgroundSize: '440px',
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