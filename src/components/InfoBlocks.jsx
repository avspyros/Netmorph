export default function InfoBlocks() {

  return (
    <div className="infoblocks-wrapper">
      <div className="infoblocks">
        <div className="infoblock">
          <div className="infoblock-inner">
            <p>Spyros Avgoustatos</p>
            <p><span className="info-variant-txt">Residence:</span> Athens, Greece</p>
            <p><span className="info-variant-txt">Currently employed @</span> 47 Purity Street</p>
          </div>
          <div className="vertical-divider"></div>
          <div className="infoblock-inner">
            <p><span className="info-variant-txt">Born:</span> Athens, 1982</p>
            <p><span className="info-variant-txt">Studied @</span> Serres Technological Educational Institute</p>
            <p>B. Sc. Geoinformatics & Surveying <span className="info-variant-txt">(2001 - 2006)</span></p>
          </div>
        </div>
        <div className="infoblock">
          <div className="avatar"></div>
        </div>
      </div>
    </div>
  )
}