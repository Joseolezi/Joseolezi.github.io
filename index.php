
                            <!-- Jose F.P. All rights reserved -->

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JosePsicologo</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Saira:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,100,1,200&icon_names=favorite,home,search,settings" rel="stylesheet" />
    <script src="main.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/validate.js/0.13.1/validate.min.js"></script> 
</head>
 

<body>
    
    <header class="header" > 
        <nav class=navbar id="navbar">    
            
            <h1>Jose Fandos</h1>
            <h3>PSICOLOGO GENERAL SANITARIO</h3>
            <div class="navbar-container">  
                <ul>
                    <li><a href= "#Inicio">Inicio</a></li>
                    <li><a href="#Consulta">Consulta</a></li>
                    <li><a href="#Agenda">Agenda</a></li>
                </ul>
            </div>  
        </nav>

    </header>
    
        <a href="#Inicio"><img class="main-img" src="Images/lotus-g.png" alt="">
        </main-img>
        </a>
            <div class="inicio-container">
            <section class="Inicio" id="Inicio">
                <a href="https://es.wikipedia.org/wiki/Albert_Ellis" target="_blank">
                    <q>No busques ser perfecto, busca ser feliz.</q>
                </a>
                        <h5>Albert Ellis</h5>
                    <br /><br />
                <a href="https://es.wikipedia.org/wiki/Elizabeth_Loftus" target="_blank">
                    <q>La memoria, como la libertad, es algo frágil.</q>
                </a>
                        <h5>Elizabeth Loftus</h5>
                                            <br /><br />
                <a href="https://es.wikipedia.org/wiki/Steven_C._Hayes" target="_blank">
                    <q>Si siempre haces lo que siempre has hecho, siempre obtendrás lo que siempre has tenido.</q>
                </a>
                        <h5>Steven C. Hayes</h5>
                    <br /><br />            
                <a href="https://es.wikipedia.org/wiki/Margaret_Floy_Washburn" target="_blank">
                    <q>Nada en el mundo es tan atractivo para las emociones como la mente de otro ser humano.
                        </q>
                </a>
                        <h5>Margaret Floy Washburn</h5>
                    <br /><br />
                <a href="https://es.wikipedia.org/wiki/Aaron_T._Beck" target="_blank">
                    <q>Nuestro modo de pensar determina en gran medida si alcanzaremos nuestros objetivos 
                        y disfrutaremos de la vida.</q>
                </a>
                        <h5>Aaron Beck</h5>
            </section>  
        </div>
            <h1>Consulta</h1>
            <div class="centercontainer">
        <section class="Consulta" id="Consulta">
            <img class="portrait" src="Images/jose-portrait.png" alt=""></img>
            <div class="biocont" id='biocont'>
                
                <p>¡Hola! Soy Jose. Bienvenido/a a mi consulta online Ψ</p>
               
                <p class="biobtn" id="popen" onclick="openpop()">Puedes ver mi trayectoria profesional aquí
                        <img class="tab-move" id="tab-move" src="Images/tab-move.png" alt="">
                    </img></p>
                        <!-- popup -->
                        <div class="popup-overlay" id="popupOverlay">

                        <div class="popup" id="popup">
                    
                            <div class="popup-content">
                                <h3>Formación y experiencia:</h3>
                                <p>2015: Grado en psicología (UJI)</p>
                                <p>2016: Máster en Coaching y liderazgo (UV)</p>
                                <p>2016 - 2023: Psicólogo (freelance)</p>
                                <p>2023 - 2025: Máster en psicología general sanitaria (VIU)</p>
                                <p>2025 - actualidad: Psicólogo general sanitario (freelance)</p>
                 
                <button id="popclose" onclick="closepop()">Cerrar</button>
                    
                            </div>
                         
                    </div>
                
                </div>
                
                <script src="main.js"></script>
                 <!-- popup end -->
            </div>
        </div>
        
        </section>
            <div class="areas-title"><h1>Áreas de trabajo</h1></div>
                <div class="areas-container">
                
                    <section class="areas" id="areas">
                        <li class="areasli"><h4>Autismo</h4></li>
                        <li class="areasli"><h4>TDAH</h4></li>
                        <li class="areasli"><h4>Ansiedad</h4></li>
                        <li class="areasli"><h4>Tristeza</h4></li>
                        <li class="areasli"><h4>Alto rendimiento</h4></li>
                        <li class="areasli"><h4>Duelo</h4></li>
                        <li class="areasli"><h4>Trauma</h4></li>
                        <li class="areasli"><h4>Psicología infantil</h4></li>
                        <li class="areasli"><h4>Psicología de la salud</h4></li>
                        <li class="areasli"><h4>Charlas de psicología</h4></li>
                </div>
        </section>
        <div class= "Agenda" id="Agenda">
            <h1>Agenda</h1>
            <h3>Reservar cita online</h3>
            <iframe class="ag" id="ag" src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ27Jw-rD8CNcxGwUUie4A0wvQe933BwNoaUmnG9Lqco7tHm1syYqZ9QrQu5D-AvN_kXKpOAdNGw?gv=true"
             ></iframe>

        </div>
    <!-- style="border: 0px none; margin-left: 0.5rem; margin-right: 0.5rem; height: 45rem; margin-top: -230px; width: 100%;"-->
        <div class="form-title-container" id="form-title-container">
            <h3>Formulario de contacto</h3> 
           
        </div>
    <div class="formContainer id=formContainer">
      
        <div class="email">
            <form id="formulario" action="https://formsubmit.co/jose.fandos.pgs@gmail.com" method="POST" onsubmit="sendEmail(); reset(); return false;">
                
                <input type="text" id="InputName" type="text" name="Nombre" placeholder="Nombre y apellidos*" required></input>
                <input type="email" name="Email" id="InputEmail" type="text" name="Email" placeholder="Email*" required></input>
                <input type="number" id="InputTel" type="text" name="Teléfono" placeholder="Teléfono"></input>
                <input type="hidden" id="_subject" name="_subject" value="Formulario de la web">
                <select type="subject" id="motivo" name="Asunto">
                    <option>Mensaje</option>
                    <option>Solicitud de información</option>
                    <option>Solicitud de llamada telefónica</option>
                    <option>Modificar/cancelar cita</option>
                    <option>Propuesta comercial</option>
                    <option>Urgencia</option>
                    <option>Otro</option>
                </select>
                <input type="text" name="_honey" style="display:none">
                <input type="hidden" name="_autoresponse" value="Copia de tu mensaje:">
                <div class="message-container">
                    <textarea type="text" id="mensaje" name="Mensaje" placeholder="Texto*" required></textarea>
                </div>
                <button class="btn" id="btn" type="submit" value="Send"> Enviar</button>
                <script>

                    
                </script>
                <p>*Al hacer click en enviar se te redigirá al recaptcha de seguridad del servicio FormSubmit</p>
          </form>
            </form>
            </div>
        </div>
        <script src="main.js"></script>
                    
                
            </form>
<br><br><br><br><br>
</body>
</html>
