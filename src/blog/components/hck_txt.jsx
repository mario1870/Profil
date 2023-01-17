import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row } from 'react-bootstrap';
import Erst from './blog_comps';





export default function Hck_txt() {

    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
      function handleScroll() {
        setScrollPosition(window.pageYOffset);

        const school = document.getElementById("thema1")
        console.log(school)

        
        
        let observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
            if (entry.intersectionRatio > 0) {
                school.style.animation = "schule 3s 1 forwards"

            }
            else{
                school.style.animation = "schule_reverse 3s 1 forwards"

            }
            });
        });

        observer.observe(school);

        
        


        school.addEventListener("animationend", function(){
            school.style.left = "300px";
        });
        



   

      }
  
      window.addEventListener('scroll', handleScroll);

  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    });

  return (
    <>
        <div style={{marginTop: "-50px"}}>
        
        <div style={{height: 'calc(100vh)', backgroundImage:"url(wwww.jpg)", backgroundSize:"cover"}} className='d-flex pt-5'>

        <Container style={{marginTop: "0px", zIndex: "3"}} >

            <Row>
                
                <Erst id="thema1" col="4" ueberschrift= "Recon-ng" text1="Recon-ng ist ein Programm, welches webbasierte Open-Source-Aufklärung möglichst schnell und gründlich durchführt." img_src="https://inesmartins.github.io/content/images/size/w2000/2020/06/recon-ng.png" link="/blog/Ethical_Hacking/informationsgewinnung" />
                <Erst col="8" ueberschrift= "Google-Hacking" text1="Google Hacking ist Teil der ersten Stufe eines hackingangriffs, der sogenannten Reconnaicance." img_src="https://thehackernews.com/images/-t0syJYrfZA4/Xd5M5DAou8I/AAAAAAAA13A/GM5c_TEqqmkDAiqdmvNCcInVJ_-q1TEwgCLcBGAsYHQ/s728-rj-e365/google-hacking.png" />
            </Row>


            <Row>
                <Erst col="4" ueberschrift= "Symetrische Verschlüsselung" text1="Symetrische Verschlüsselung ist eine Methode Nachrichten zu verschlüsseln. Bei dieser Methode verschlüsselt der Absender die Nachricht mit einem Schlüssel." img_src="https://www.dr-datenschutz.de/wp-content/uploads/2014/04/it-sicherheit-51-511x302.jpg" />
                <Erst col="4" ueberschrift= "Asymmetrische Verschlüsselung" text1="Asymetrische Verschlüsselung ist eine Methode Nachrichten zu verschlüsseln. Bei dieser Methode verschlüsselt der Absender die Nachricht mit einem öffentlichen und einem privaten Schlüssel." img_src="https://www.ionos.de/digitalguide/fileadmin/DigitalGuide/Teaser/e-mail-verschluesseln-t.jpg" />
                <Erst col="4" ueberschrift= "HASH Verschlüsselung" text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor." img_src="https://increaseyourskills.com/fileadmin/images/blog/Hashwerte.png" />
            </Row>

            <Row>
                <Erst col="8" ueberschrift= "Die 5 Phasen eines Hackingangriffs" text1="Google Hacking ist Teil der ersten Stufe eines hackingangriffs, der sogenannten Reconnaicance." img_src="https://i.ds.at/FQOszw/rs:fill:1200:600/plain/2022/05/26/cyberangriffe.jpg" />
                <Erst col="4" ueberschrift= "Schutzziele der IT-Security" text1="Recon-ng ist ein Programm, welches webbasierte Open-Source-Aufklärung möglichst schnell und gründlich durchführt." img_src="https://www.redlings.com/img/content/guide-informationsecurity-1.jpg" link="/blog/Ethical_Hacking/informationsgewinnung" />
            </Row>

            <Row>
                <Erst col="4" ueberschrift= "Metagoofil" text1="Mit dem Tool Metagoofil kann man Metadaten aus einer Website laden, um diese zu analysieren und auszuwerten." img_src="https://d27jswm5an3efw.cloudfront.net/app/uploads/2020/03/Metadaten-1-1.jpg" />
                <Erst col="4" ueberschrift= "Maltego" text1="" img_src="https://cdn1.vogel.de/unsafe/540x0/smart/images.vogel.de/vogelonline/bdb/1824600/1824618/original.jpg" />
                <Erst col="4" ueberschrift= "WHOIS-Datenbank" text1="" img_src="https://hostero.net/wp-content/uploads/2017/01/whois-datenbank.png" />
            </Row>

            <Row>
                <Erst col="4" ueberschrift= "Social Media" text1="" img_src="https://www.reisevor9.de/var/site/storage/images/_aliases/article_16x9/2/7/2/0/1490272-1-ger-DE/Social%20Media%20Icons%20W%C3%BCrfel%20Foto%20iStock%20pressureUA.jpg" />
                <Erst col="4" ueberschrift= "Domain Name System" text1="" img_src="https://kinsta.com/wp-content/uploads/2018/05/what-is-dns.png" />
                <Erst col="4" ueberschrift= "Suchmaschinen" text1="" img_src="https://www.farbentour.de/wp-content/uploads/2018/11/Die-beliebtesten-Suchmaschinen.jpg" />
            </Row>
        </Container>

        </div>
        </div>
    </>
  )
}
