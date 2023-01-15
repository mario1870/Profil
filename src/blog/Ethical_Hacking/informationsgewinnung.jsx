import React from 'react';
import { Container } from 'reactstrap';

function Informationsgewinnung() {
  return (
    <Container className=''>
        <h1 className="display-3 " style={{marginTop:"80px"}}>RECON-NG</h1>
        <p className="lead">Ethical Hacking</p>
        <hr className="my-2" />
        <p>Recon-ng ist ein in Python geschriebenes Programm, um webbasierte Informationen zu sammeln. 
          Das Programm ist in Kali-Linux bereits vorinstalliert und kann entweder mit dem Befehl "recon-ng" oder über die grafische Benutzeroberfläche gestartet werden.
          Das Programm ist so aufgebaut, dass man sogenannte Workspaces erstellen kann und dann verschiedene Module dort hinenladen kann und diese dann ausführen.<br /><br />

          → Workspace erstellen: "workspaces create name_des_workspaces"<br />
          → bereits vorhandenen Workspace laden: "workspaces load name_des_workspaces"<br />
          → nach Modulen suchen: "marketplace search"<br />
          → Modul installieren: "marketplace install name_des_moduls"<br />
          → Modul laden: "marketplace load name_des_moduls"<br />
          → Domain anpassen: "options set SOURCE domain.de"<br />
          → Programm starten: "run"<br />
          → Einträge anzeigen lassen: "show contacts"
        </p>
    </Container>
  );
}

export default Informationsgewinnung;