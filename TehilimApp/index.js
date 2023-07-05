const salmos = [
    
    {Categoria:'Embarazo, Natalidad, 1<br><br>', 
    nombre: 'Salmo: 1 (Cuando una mujer está embarazada y teme un nacimiento prematuro, o un parto peligroso)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br> 1. Para obtener deleite en el estudio de la Torá (Recitar miércoles o previamente al estudio de la Torá). <br> 2. Para tener éxito al iniciar un emprendimiento (Recitar en martes) <br> 3. Para apartar a los malvados del camino (Recitar en martes)<br>  4. Para obtener una abundante cosecha (Recitar en martes)<br><br> El Material ampliado se encuentra en el Shiur 2'},

    {Categoria:'Tormentas Maritimas, Dolor De Cabeza, 2<br><br>', 
    nombre: 'Salmo: 2 (Para aplacar las tormentas martimas y el dolor de cabeza)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br> 1. Para apaciguar la tormenta interior.<br> 2. Para alejar las guerras y a los tiranos que oprimen a un pueblo o a una nación. <br> 3. Para recitar cuando un pueblo o una nación tenga que escoger a sus gobernantes <br>  4. Para encontrar abrigo en el Eterno y recuperar la dignidad <br> 5. Para desarrollar la intuición y la facultad de la sanación <br><br> El Material ampliado se encuentra en el Shiur 2'},

    {Categoria:'Salud, Dolor, Espalda, 3<br><br>', 
    nombre: 'Salmo: 3 (Aplacar severo dolor de cabeza o de espalda)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br> 1. Para facilitar el reposo y la tranquilidad (Recitar en viernes)<br> 2. Concede un escudo frente a los adversarios (Recitar en martes) <br> 3. Facilita el pago de las deudas financieras (Recitar en martes) <br><br> El Material ampliado se encuentra en el Shiur 2'},

    {Categoria:'Exito, Mazal, 4<br><br>', 
    nombre: 'Salmo: 4 (Obtener buen mazal)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br> 1. Contra la opresión de los superiores (Recitar en martes) <br>2. Para apartar los infortunios (Recitar en martes)<br> 3. Proporciona una asistencia rápida ante cualquier dificultad (Recitar en domingo) <br><br> El Material ampliado se encuentra en el Shiur 2'},

    {Categoria:'Audiencia, 5<br><br>', 
    nombre: 'Salmo: 5 (Obtener una audiencia favorable ante los magistrados o una persona influyente)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br> 1. Para vincularse con la energía de la prosperidad (Recitar en un martes y/o jueves) <br>2. Para solicitar un favor financiero (Recitar en jueves)<br> 3. Protección contra asaltantes y homicidas (Recitar en martes) <br>4. Protección contra Mazikim, entes dañinos (Recitar en martes) <br><br> El Material ampliado se encuentra en el Shiur 2'},

    {Categoria:'Salud, Ojos, 6<br><br>', 
    nombre: 'Salmo: 6 (Para curar las enfermedades de los ojos)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br> 1. Salmo de sanación (Recitar en domingo) <br>2. Remueve el dolor al recitarlo al lado (de la zona afectada) de quien padece<br>3. Aleja la tristeza y el llanto (Recitar en domingo) <br>4. Facilita para encontrar, con ayuda de los cielos, la vocación (Recitar en miércoles o viernes)<br><br> El Material ampliado se encuentra en el Shiur 2'},
   
    {Categoria:'Adversarios, Opositores, 7<br><br>', 
    nombre: 'Salmo: 7 (Contra las conspiraciones de los adversarios)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br> 1. Proporciona una asistencia rápida ante cualquier dificultad (Recitar en domingo o cuando se requiera). <br>2. Facilita descubrir, con ayuda de los cielos, los secretos de la torá de los oponentes (Recitar un miércoles o viernes) <br><br> El Material ampliado se encuentra en el Shiur 3'},

    {Categoria:'Gracia, Exito, 8<br><br>', 
    nombre: 'Salmo: 8 (Para obtener gracia y el éxito en los negocios)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br> 1. Para alabar el poder del Eterno. <br>2. Para crear un vínculo entre el hombre y las fuerzas del universo <br>3. Para agradecer por un favor recibido<br>4. Protege a los bebés y a los niños<br>5. Cura las dolencias de los animales<br>6. Contra el insomnio <br><br> El Material ampliado se encuentra en el Shiur 3'},

    {Categoria:'Salud, Sanacion Niño, Opositores, 9<br><br>', 
    nombre: 'Salmo: 9 (Para la sanación de un niño y contra opositores)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br> 1. Revela la vocación (Recitar en viernes)<br>2. Aleja la pobreza (Recitar en martes) <br>3. Ayuda a librarse de la prisión (Recitar en jueves).<br>4. Ayuda a obtener una solución o revelación por medio de los sueños (Recitar en viernes) <br><br> El Material ampliado se encuentra en el Shiur 3'},

    {Categoria:'Librarse de fuerza impura, 10<br><br>', 
    nombre: 'Salmo: 10 (Para librarse de una fuerza impura)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br> 1. Afirma la confianza en la protección divina <br>2. Amparo para los huérfanos <br>3. Protege de los fraudes (Recitar en un día martes)<br>4. Para librarse del odio (Recitar en un día martes). <br><br> El Material ampliado se encuentra en el Shiur 3'},

    {Categoria:'Miedo, Persecuciones,11<br><br>', 
    nombre: 'Salmo: 11 (Para controlar el Miedo y las persecuciones)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br> 1. Salmo para los viajeros<br>2. Para librarse de las dificultades financieras (Recitar en un día martes) <br>3. Para resolver problemas vinculados con la sexualidad (Recitar en martes para la disfunción sexual) <br>4. Para afianzarse en el camino correcto y en la justicia (Recitar en un día jueves). <br><br> El Material ampliado se encuentra en el Shiur 3'},

    {Categoria:'Miedo, Persecuciones, 12<br><br>', 
    nombre: 'Salmo: 12 (Para controlar el Miedo y las persecuciones)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br> 1. Salmo para la corrección en el uso de las palabras<br>2. Salmo para fortalecer el organismo y el sistema inmunológico (Recitar en domingo)<br><br> El Material ampliado se encuentra en el Shiur 4'},

    {Categoria:'Dolor Fisico, Salud, Muerte no natural, 13<br><br>', 
    nombre: 'Salmo: 13 (Para librarse del dolor fisico y de la muerte no natural)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br> 1. Para recuperar la Emuná y Bitajón (certeza y confianza) en la ayuda Divina (Recitar en viernes)<br>2. Para apartarse de los vicios (Recitar en martes)<br><br> El Material ampliado se encuentra en el Shiur 4'},

    {Categoria:'Favores,Librarse de calumnias,14<br><br>', 
    nombre: 'Salmo: 14 (Para recibir favores y librarse de calumnias)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br> 1. Para saber si alguien tiene malas intenciones (Recitar en viernes)<br>2. Para librarse del miedo (Recitar en martes)<br>3. Para librarse del malvado (Recitar en martes).<br><br> El Material ampliado se encuentra en el Shiur 4'},

    {Categoria:'Fuerza impura,Locura,Melancolia,15<br><br>', 
    nombre: 'Salmo: 15 (Para librarse de una fuerza impura, la locura y la melancolía)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br> 1. Facilita saldar las deudas, principalmente si los intereses son elevados (Recitar en martes)<br><br> El Material ampliado se encuentra en el Shiur 4'},

    {Categoria:'Ladron,Pena,Alegria,Opositores,16<br><br>', 
    nombre: 'Salmo: 16 (Para convertir la pena en alegria y los opositores en aliados)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Si se recita este salmo, junto con el shem JAï, un jueves a primera hora facilita la solución en cuestiones vinculadas con herencias<br>2. Si se recita este salmo, junto con el shem JAÏ, se recita el lunes, promueve el desarrollo de la intuición<br>3. Si se recita en viernes promueve el desarrollo de la profecía<br><br> El Material ampliado se encuentra en el Shiur 4'},

    {Categoria:'Protección,Viaje,17<br><br>', 
    nombre: 'Salmo: 17 (Proteccion  por 24 horas durante viaje)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Contra los vicios (Recitar en un día martes)<br>2. Protección del hogar contra los incendios (Recitar en un día martes)<br>3. Contra los pensamientos suicidas (Recitar en un día martes)<br>4. Estimula a la esperanza (Recitar en un día viernes)<br>5. Aleja las acusaciones injustas (Recitar en un día jueves)<br><br> El Material ampliado se encuentra en el Shiur 4'},  

    {Categoria:'Protección,Viaje,Salud,18<br><br>', 
    nombre: 'Salmo: 18 (Proteccion  por 24 horas durante viaje y Restablecer la salud de un enfermo)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Favorece en manifestar el verdadero don (talento)<br>2. Protección contra las doctrinas esclavizadoras, la idolatría y los fraudes (Recitar un martes).<br>3. Contra los malos gobernantes (Recitar en un día martes)<br><br> El Material ampliado se encuentra en el Shiur 4'},  

    {Categoria:'Parto,Fuerza impura,Niño,Buen Estudiante,19<br><br>', 
    nombre: 'Salmo: 19 (Para librarse de una fuerza impura, la locura y la melancolía)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br> 1. Contra el orgullo (Recitar en martes)<br>2. Favorece la meditación e introspección (Recitar en lunes)<br>3. Remueve las dificultades en la pareja (Recitar en viernes)<br><br> El Material ampliado se encuentra en el Shiur 4'},

    {Categoria:'Peligro,Sufrimiento,20<br><br>', 
    nombre: 'Salmo: 20 (Para apartar el peligro y el sufrimiento)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Para obtener la éxito en todos los asuntos (Recitar todos los días).<br><br> El Material ampliado se encuentra en el Shiur 4'},

    {Categoria:'Apartar Tormentas Maritimas Peligrosas, 21<br><br>', 
    nombre: 'Salmo: 21 (Para apartar una tormenta marítima peligrosa)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Contra el asedio de fuerzas impuras (Recitar en martes)<br>2. Ayuda a la consecución de los objetivos (Recitar en martes)<br>3. Resuelve los problemas de disfunción sexual (Recitar en martes)<br>4. Protege contra los planes de los enemigos<br>5. Petición para que la victoria alcanzada tenga duración<br>6. Aleja la opresión y el peso de la responsabilidad<br>7. Cuando existe traición<br>8. Trae aperturas a todos los niveles<br><br> El Material ampliado se encuentra en el Shiur 5'},

    {Categoria:'Proteccion, Viaje, 22<br><br>', 
    nombre: 'Salmo: 22 (Para estar bajo protección divina por 24 horas durante un viaje)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Suaviza e incluso remueve los decretos severos (Recitar en un día martes y/o jueves)<br>2. Facilita el embarazo e incrementa la leche maternal (Recitar en un día domingo)<br>3. Trae socorro rápido a los afligidos<br>4. Mantiene la fe dentro del hogar, aproxima a los familiares<br>5. Sirve para pedir bienes materiales.<br>6. Facilita el nacimiento de los bebés y la producción de leche materna<br>7. Para ser aceptado en la comunidad<br>8. Para la felicidad conyugal<br><br> El Material ampliado se encuentra en el Shiur 5'},

    {Categoria:'Revelacion, Sueño, 23<br><br>', 
    nombre: 'Salmo: 23 (Para recibir revelacion mediante un sueño)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Contra la inseguridad (Recitar en un día martes)<br> 2. Certeza en la providencia Divina (Recitar en un día viernes)<br>3. Atrae el buen sustento (Parnasá Tová)(Recitar en un día martes)<br>4. Trae el amor y la armonía a la vida<br><br> El Material ampliado se encuentra en el Shiur 5'},

    {Categoria:'Apartar Peligros, Inundaciones, 24<br><br>', 
    nombre: 'Salmo: 24 (Para apartar todo peligro y amenazas de inundaciones)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Para obtener holgura económica (Se recita en las dos noches de Rósh HaShaná)<br>2. Para recuperar bienes familiares (Recitar en un día jueves)<br>3. Favorece todo tipo de aperturas<br>4. Aleja las amenazas y la derrota<br><br> El Material ampliado se encuentra en el Shiur 5'},

    {Categoria:'Apartar Peligros, Inundaciones, 25<br><br>', 
    nombre: 'Salmo: 25 (Para apartar todo peligro y las inundaciones)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Aparta la soledad (Recitar en un día viernes)<br>2. Contra los adversarios peligrosos (Recitar en un día martes)<br>3. Perdón por los errores cometidos<br>4. Protege en una cuestión que está siendo juzgada<br>5. Empleado para encontrar a una persona desaparecida<br><br> El Material ampliado se encuentra en el Shiur 5'},

    {Categoria:'Apartar Peligros, Prisión Severa 26<br><br>', 
    nombre: 'Salmo: 26 (Para apartar todo peligro y contra prisión severa)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Para conservar el empleo (Recitar en un día jueves)<br>2. Protege el hogar de presencias negativas y evita asaltos (Recitar en un día martes)<br>3. Para alejar a las personas mal intencionadas (Recitar en un día martes)<br>4. Protección contra todo tipo de traición<br>5. Da fuerza en los momentos de adversidad<br><br> El Material ampliado se encuentra en el Shiur 5'},

    {Categoria:'Recibir Hospitalidad, 27<br><br>', 
    nombre: 'Salmo: 27 (Para recibir hospitalidad)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Contra el falso testimonio (Recitar en un día jueves)<br>2. Contra los animales ponzoñosos (Recitar en un día martes)<br>3. Para apartar las malas compañias (Recitar en un día martes)<br>4. Aleja el miedo<br>5. Protege a los niños abandonados por los padres<br>6. Derrota a los opositores, dándoles el castigo justo<br>7. Para encontrar abrigo, asilo o refugio en momentos de infelicidad y en horas de necesidad<br><br> El Material ampliado se encuentra en el Shiur 5'},

    {Categoria:'Reconciliarse, Opositor, 28<br><br>', 
    nombre: 'Salmo: 28 (Para reconciliarse con un opositor)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Para aliviar las afecciones respiratorias (asma, bronquitis, etc.)<br>2. Contra los maleficios (Recitar en un día martes)<br>3. Facilita las cuestiones relacionadas con el salario<br>4. Para resolver cuestiones de herencias<br><br> El Material ampliado se encuentra en el Shiur 5'},

    {Categoria:'Desterrar, Fuerza Impura, 29<br><br>', 
    nombre: 'Salmo: 29 (Para desterrar una fuerza impura)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Contra los incendios (Recitar en un día martes)<br>2. Para apaciguar vientos fuertes, tormentas, tempestades, etc<br>3. Para anular un trabajo de brujería (Recitar en un día martes)<br><br> El Material ampliado se encuentra en el Shiur 6'},

    {Categoria:'Librarse, Influencias, Opositor, Satan 30<br><br>', 
    nombre: 'Salmo: 30 (Para librarse de las influencias del opositor (Satán))<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Para los trastornos de salud (Recitar en un día domingo). visualizando el sello de samej-mem<br>2. Contra el mal de ojo (Recitar en un día martes)<br>3. Contra los hechizos (Recitar en un día martes)<br>4. Aleja la tristeza y las preocupaciones (Recitar en un día domingo)<br><br> El Material ampliado se encuentra en el Shiur 6'},

    {Categoria:'Ain HaRa, Mal De Ojo, Lashon HaRa, Habladurías, 31<br><br>', 
    nombre: 'Salmo: 31 (Para librarse del mal de ojo y que las malas lenguas no causen daño)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Contra los maleficios (Recitar en un día martes)<br>2. Contra los entes dañinos (Recitar en un día martes)<br><br> El Material ampliado se encuentra en el Shiur 6'},

    {Categoria:'Amor, Gracia, Benevolencia, 32<br><br>', 
    nombre: 'Salmo: 32 (Recibir la buena voluntad, la gracia, el amor y la benevolencia de todas las personas)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Para alabar el poder del Eterno por una gracia recibida<br>2. Protege a los bebés y a los niños (Recitar en un día martes)<br>3. Cura las dolencias de los animales (Recitar en un día viernes)<br>4. Contra el insomnio (Recitar en un día domingo)<br><br> El Material ampliado se encuentra en el Shiur 6'},

    {Categoria:'Proteger, Vida, Recien Nacido, 33<br><br>', 
    nombre: 'Salmo: 33 (Para proteger hijos en el nacimiento)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. En tiempos de hambre y miseria general, los habitantes del pueblo, ciudad o país deben recitar este Salmo, uniendo los corazones y voluntades (Recitar en jueves)<br>2. Para vincularse a la energía de la prosperidad (Recitar en martes)<br>3. Para facilitar el aprendizaje (Recitar en miércoles)<br><br> El Material ampliado se encuentra en el Shiur 6'},

    {Categoria:'Hospitalidad, Gracia, Persona Influyente, Magistrados, 34<br><br>', 
    nombre: 'Salmo: 34 (Si se tiene asuntos que tratar con los magistrados o una persona influyente y se desea ser recibido con hospitalidad y obtener su favor especial)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Facilita el aprendizaje (Recitar en un día miércoles)<br>2. Para tener confianza y alcanzar el éxito (Recitar en un día martes)<br>3. Facilita el vinculo con el Ángel asignado (Recitar en un día viernes)<br><br> El Material ampliado se encuentra en el Shiur 6'},

    {Categoria:'Victoria, Magistrado, 35<br><br>', 
    nombre: 'Salmo: 35 (Si se tiene un asunto pendiente que tratar con los magistrados en el cual se tiene una persona sin conciencia, vengativa y pendenciera como oponente)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Protege la casa y a las mascotas (Recitar en un día martes)<br>2. Para estar a salvo de los enemigos y de los espíritus acusadores(Mekatreguím)(Recitar en martes)<br><br> El Material ampliado se encuentra en el Shiur 6'},

    {Categoria:'Habladurías, Difamación, Lashon HaRa, 36<br><br>', 
    nombre: 'Salmo: 36 (Para librarse de la difamación y de las habladurías)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Para quedar en cinta (Recitar en un día lunes)<br>2. Protege a los animales (Recitar en un día martes)<br><br> El Material ampliado se encuentra en el Shiur 6'},

    {Categoria:'Embriaguez, Borrachera, 37<br><br>', 
    nombre: 'Salmo: 37 (Si una persona ha bebido en tal exceso que ha perdido el juicio y consecuentemente se teme por su integridad)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Para adquirir la vivienda propia (Recitar en martes)<br>2. Favorece la memoria (Recitar en lunes). Tosefta: ayuda el consumo de aceite de oliva en ayunas y pan a las brasas<br>3. Para el crecimiento espiritual (Recitar en viernes)<br><br> El Material ampliado se encuentra en el Shiur 6'},

    {Categoria:'Veredicto Desfavorable, Calumnias, 38<br><br>', 
    nombre: 'Salmo: 38 (Para librarse de un veredicto desfaborable y de las calumnias)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Para fortalecer la memoria (Recitar en lunes)<br>2. Contra los malos consejos (Recitar en martes)<br>3. Auxilia en la enfermedad y en la depresión (Recitar en domingo)<br><br> El Material ampliado se encuentra en el Shiur 7'},

    {Categoria:'Castigo, Corte, Magistrados, 39<br><br>', 
    nombre: 'Salmo: 39 (Contra un castigo de la corte o magistrados)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Favorece en el aprendizaje (Recitar en miércoles)<br>2. Para la reparación de las malas palabras<br><br> El Material ampliado se encuentra en el Shiur 7'},

    {Categoria:'Fuerza, Impura, Dañina<br><br>', 
    nombre: 'Salmo: 40 (Para librarse de las fuerzas impuras y dañinas)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Para librarse de la depresión o trastornos mentales (Recitar en lunes)<br>2. Fortaleza para la observación de las Mitzvot (Recitar en martes)<br><br> El Material ampliado se encuentra en el Shiur 7'},

    {Categoria:'Recuperar, Reputación, 41<br><br>', 
    nombre: 'Salmo: 41 (Para recuperar nuevamente la buena reputación)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Para encontrar empleo (Recitar en martes)<br>2. Para cobrar deudas pendientes (Recitar en martes)<br><br> El Material ampliado se encuentra en el Shiur 7'},

    {Categoria:'Información, Sueño, 42<br><br>', 
    nombre: 'Salmo: 42 (Para obtener información a través  de un sueño)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Para encontrar pareja (Recitar en viernes)<br>2. Contra el peligro de perder la casa, el negocio o empleo (Recitar en martes)<br><br> El Material ampliado se encuentra en el Shiur 7'},

    {Categoria:'Información, Sueño, 43<br><br>', 
    nombre: 'Salmo: 43 (Para obtener información a través  de un sueño)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Protección en tiempos de conflictos bélicos (Recitar en martes)<br>2. Para encontrar un buen abogado (Recitar en jueves)<br><br> El Material ampliado se encuentra en el Shiur 7'},

    {Categoria:'Protección, Opositores, 44<br><br>', 
    nombre: 'Salmo: 44 (Para protección de los opositores)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Para tiempos difíciles de una nación, estado o un pueblo (Recitar en jueves)<br>2. Protección contra los robos y secuestros (Recitar en martes)<br>3. Para hacer buenas alianzas (Recitar en martes)<br>4. Para sanación de la urticaria (Recitar en domingo)<br><br> El Material ampliado se encuentra en el Shiur 7'},

    {Categoria:'Paz, Shalom, Matrimonio, 45<br><br>', 
    nombre: 'Salmo: 45 (Para lograr la paz en el matrimonio)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Facilita y aproxima las celebraciones/bodas (Recitar en viernes)<br>2. Beneficia y otorga protección a los artistas y creativos (Recitar en viernes)<br>3. Protege a la descendencia (Recitar en martes)<br><br> El Material ampliado se encuentra en el Shiur 7'},

    {Categoria:'Matrimonio, Reconciliar, 46<br><br>', 
    nombre: 'Salmo: 46 (Para reconciliar el matrimonio)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Para remover el odio y el rencor (Recitar en martes)<br>2. Protección en tiempos de conflictos bélicos (Recitar en martes).<br>3. Otorga fuerza física y mental o "espíritu de lucha" (Recitar en martes)<br><br> El Material ampliado se encuentra en el Shiur 8'},

    {Categoria:'Gracia, Hospitalidad, 47<br><br>', 
    nombre: 'Salmo: 47 (Para recibir gracia y hospitalidad)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Protección e inspiración para los músicos (Recitar en viernes)<br>2. Para suscitar a la Teshuvá (Recitar en viernes)<br><br> El Material ampliado se encuentra en el Shiur 8'},

    {Categoria:'Protección, Opositores, 48<br><br>', 
    nombre: 'Salmo: 48 (Para protección de los opositores)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Facilita el ingreso a los estados de meditación (Recitar en lunes)<br>2. Protección en asuntos con los magistrados (Recitar en jueves)<br><br> El Material ampliado se encuentra en el Shiur 8'},

    {Categoria:'Fiebre, 49<br><br>', 
    nombre: 'Salmo: 49 (Bajar una fiebre severa)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>Para librarse de la muerte súbita (Recitar en martes)<br><br> El Material ampliado se encuentra en el Shiur 8'},

    {Categoria:'Peligro, Ladrones 50<br><br>', 
    nombre: 'Salmo: 50 (Para apartar peligro de los ladrones)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Para bajar la fiebre (Recitar en martes)<br>2. Para desarollar la disciplina (Recitar en martes)<br><br> El Material ampliado se encuentra en el Shiur 8'},

    {Categoria:'Transgresión, Rectificar, 51<br><br>', 
    nombre: 'Salmo: 51 (Para rectificarse por una transgresion grave)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Aleja las fuerzas impuras (Recitar en un día martes)<br>2. Para librarse del incesto (Recitar en un día martes)<br>3. Otorga poder a las palabras<br><br> El Material ampliado se encuentra en el Shiur 8'},

    {Categoria:'Calumnias, Lashon HaRa, 52<br><br>', 
    nombre: 'Salmo: 52 (Contra las calumnias)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Contra las maldiciones (Recitar en un día martes)<br>2. Para alejar a las personas con malas intenciones (Recitar en un día martes)<br><br> El Material ampliado se encuentra en el Shiur 8'},

    {Categoria:'Miedo, Opositores, 53<br><br>', 
    nombre: 'Salmo: 53 (Para infundir miedo y librarse de los opositores)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Para librarse de los ladrones (Recitar en martes)<br>2. Para librarse de caer en habladurías (Recitar en martes)<br><br> El Material ampliado se encuentra en el Shiur 9'},

    {Categoria:'Librarse, Castigar, Opositores, 54<br><br>', 
    nombre: 'Salmo: 54 (Para librarse y castigar a los opositores)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Para librarse de la angustia (Recitar en martes y en dirección al Este)<br>2. Para elevar el nivel de conciencia (Recitar en viernes)<br><br> El Material ampliado se encuentra en el Shiur 9'},

    {Categoria:'Librarse, Opositores, 55<br><br>', 
    nombre: 'Salmo: 55 (Para librarse de los opositores)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Para librarse de una prisión injusta (Recitar en jueves)<br>2. Para evitar el daño y los vejámenes que causan las malas lenguas (Recitar sobre aceite de oliva, con unas gotas de aceite de rosas y ungir manos y rostro, un martes)<br><br> El Material ampliado se encuentra en el Shiur 9'},

    {Categoria:'Librarse, Ietser HaRa, 56<br><br>', 
    nombre: 'Salmo: 56 (Para librarse del Ietser HaRa)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Para librarse de los vicios (Recitar en martes)<br>2. Para librarse de una prisión injusta (Recitar en jueves)<br>3. Para protegerse contra las fuerzas impuras (Recitar en martes)<br><br> El Material ampliado se encuentra en el Shiur 9'},

    {Categoria:'Éxito, Emprendimientos, 57<br><br>', 
    nombre: 'Salmo: 57 (Para obtener éxito en los emprendimientos)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Protección contra los ataques de los animales (Recitar en martes)<br>2. Para recibir hospitalidad y gracia ante un juez o los magistrados (Recitar en jueves)<br><br> El Material ampliado se encuentra en el Shiur 9'},

    {Categoria:'Librarse, Ataque, Perro, 58<br><br>', 
    nombre: 'Salmo: 58 (Para librarse del ataque de un perro rabioso)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Para revertir una maldición (Recitar en martes)<br>2. Para librarse de la mordedura de las serpientes (Recitar en martes)<br>3. Contra la fasinación, de un encantamiento (Recitar en martes)<br><br> El Material ampliado se encuentra en el Shiur 9'},

    {Categoria:'Librarse, Ietser HaRa, Fuerza Impura, 59<br><br>', 
    nombre: 'Salmo: 59 (Para librarse del Ietzer HaRa y de la adherencia de una fuerza impura)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Para librarse de la adherencia (Dibuk/דּבּוּק *(ִde una fuerza impura (Recitar en martes)<br>2. Contra los opositores y sus tramas (Recitar en martes)<br><br> El Material ampliado se encuentra en el Shiur 9'},

    {Categoria:'Liberar, Soldados,Peligro, 60<br><br>', 
    nombre: 'Salmo: 60 (Para librar a los soldados de todo peligro)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Para librar al cautivo (Recitar en jueves)<br>2. Protección en los terremotos (Recitar en martes)<br><br> El Material ampliado se encuentra en el Shiur 9'},

    {Categoria:'Bendición, Brajá, Éxito, Casa Nueva, 61<br><br>', 
    nombre: 'Salmo: 61 (Para atraer bendicion y éxito a una casa nueva)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Para librarse de los malos empleados (Recitar en martes)<br>2. Para evitar conflictos vinculados con las herencias (Recitar en jueves)<br><br> El Material ampliado se encuentra en el Shiur 10'},

    {Categoria:'Perdón, Teshubá, Transgresiones, 62<br><br>', 
    nombre: 'Salmo: 62 (Para obtener el perdón por las transgresiones)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Aleja las fuerzas impuras (Recitar en martes)<br>2. Para librarse del incesto (Recitar en martes)<br>3. Para sanación del aparato digestivo (Recitar en domingo)<br><br> El Material ampliado se encuentra en el Shiur 10'},

    {Categoria:'Liberarse, Sociedades, Comercio, 63<br><br>', 
    nombre: 'Salmo: 63 (Para librarse de sociedades comerciales)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Para épocas de sequías (Recitar en martes y/o jueves)<br>2. Para sanación de enfermedades hepáticas y biliares (Recitar en domingo)<br><br> El Material ampliado se encuentra en el Shiur 10'},

    {Categoria:'Librarse, Peligros, Maritimos, 64<br><br>', 
    nombre: 'Salmo: 64 (Para librarse de los peligros marítimos)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Para descubrir las trampas/engaños (trazar en martes)<br>2. Para limitar el ego y neutralizar las malas voluntades (Recitar en martes)<br><br> El Material ampliado se encuentra en el Shiur 10'},

    {Categoria:'Exito , Mazal, Solicitud, Especial, 65<br><br>', 
    nombre: 'Salmo: 65 (Para tener buen mazal en todo y para alguna solicitud especial)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Para tener un año próspero (Recitar en Rosh Hashaná)<br>2. Para descubrir la vocación (Recitar en miércoles para la profesión o viernes para la vocación)<br>3. Contra la sequías y para una cosecha abundante (Recitar en martes o jueves)<br><br> El Material ampliado se encuentra en el Shiur 10'},

    {Categoria:'Librarse, Fuerza Impura, 66<br><br>', 
    nombre: 'Salmo: 66 (Para librarse de una fuerza impura)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Para una limpieza espiritual de la casa (Recitar en martes)<br>2. Para vincularse con la energía de la prosperidad (Recitar en martes)<br><br> El Material ampliado se encuentra en el Shiur 10'},

    {Categoria:'Fiebre, Prision, Severa 67<br><br>', 
    nombre: 'Salmo: 67 (Contra una fiebre o prisión severa)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Para sanación de una enfermedad grave o crónica (Recitar en jueves y domingo)<br>2. Para obtener éxito en los negocios (Recitar en martes)<br>3. Para una cosecha abundante (Recitar en martes)<br>4. Para acercar la era del Mashíaj (Recitar en el Shabat)<br><br> El Material ampliado se encuentra en el Shiur 10'},

    {Categoria:'Librarse, Fuerza Impura, 68<br><br>', 
    nombre: 'Salmo: 68 (Para librarse de una fuerza impura)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Para adquirir la casa propia (Recitar en martes)<br>2. Para liberar a los cautivos (Recitar en jueves)<br>3. Para apartar la traición y las calumnias (Recitar en martes)<br>4. Contra el desánimo (Recitar en martes)<br>5. Contra los hechizos de magia oscura/negra (Recitar en martes)<br><br> El Material ampliado se encuentra en el Shiur 10'},

    {Categoria:'Librarse, Pasiones, 69<br><br>', 
    nombre: 'Salmo: 69 (Para librarse de las pasiones)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Aleja las falsas acusasiones (Recitar en martes)<br>2. Para obtener crediticio o un préstamo (Recitar en jueves)<br>3. Para librarse de la ambición desmedida/codicia (Recitar en martes)<br><br> El Material ampliado se encuentra en el Shiur 10'},

    {Categoria:'Vencer, Opositores, 70<br><br>', 
    nombre: 'Salmo: 70 (Para vencer a los opositores)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Para alejar las carencias (Recitar en los días martes y jueves)<br>2. Protección en tiempos de conflictos bélicos (Recitar en martes)<br>3. Para tiempos económicos difíciles de una nación, estado o un pueblo (Recitar en los días martes y jueves)<br><br> El Material ampliado se encuentra en el Shiur 10'},

    {Categoria:'Prisión, Severa, 71<br><br>', 
    nombre: 'Salmo: 71 (Contra una prision severa)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Proporciona una asistencia rápida ante cualquier dificultad (Recitar en domingo)<br>2. Facilita el éxito en una operación quirúrgica (Recitar en domingo)<br>3. Facilita el aprendizaje (Recitar en miércoles)<br><br> El Material ampliado se encuentra en el Shiur 11'},

    {Categoria:'Gracia, Abundancia, 72<br><br>', 
    nombre: 'Salmo: 72 (Para recibir gracia y abundancia)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Para atraer las lluvias (Recitar en martes)<br>2. Para atraer paz y justicia (Recitar en jueves)<br>3. Para vincularse a la gracia Divina (Recitar en viernes)<br><br> El Material ampliado se encuentra en el Shiur 11'},

    {Categoria:'Apartar, Idolatría, 73<br><br>', 
    nombre: 'Salmo: 73 (Para apartar la idolatría)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Para librarse de los miedos y las fobias (Recitar en martes)<br>2. Para alcanzar la comprensión en los estudios (Recitar viernes)<br><br> El Material ampliado se encuentra en el Shiur 11'},

    {Categoria:'Opositores, Persecuciones, 74<br><br>', 
    nombre: 'Salmo: 74 (Contra los opositores y las persecuciones)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Para obtener una audiencia favorable ante un juez o los magistrados (Recitar en jueves)<br>2. Facilita la gestión de documentación (Recitar en jueves)<br><br> El Material ampliado se encuentra en el Shiur 11'},

    {Categoria:'Rectificar, Transgresiones, 75<br><br>', 
    nombre: 'Salmo: 75 (Para rectificarse por las transgresiones)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Para librarse de la arrogancia (Recitar en martes)<br><br> El Material ampliado se encuentra en el Shiur 11'},

    {Categoria:'Apartar, Peligros, 76<br><br>', 
    nombre: 'Salmo: 76 (Para apartar peligros del fuego y el agua)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Contra las tempestades (Recitar en martes)<br>2. Para apartar a los espíritus que perturban el reposo (Recitar en martes)<br>3. Para suavizar los juicios y atraer la bondad (Recitar en jueves)<br><br> El Material ampliado se encuentra en el Shiur 11'},

    {Categoria:'Apartar, Carencia, Peligros, 77<br><br>', 
    nombre: 'Salmo: 77 (Para apartar las carencias y los peligros)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Contra el insomnio (Recitar en martes)<br>2. Contra los recuerdos que atormentan (Recitar en martes)<br><br> El Material ampliado se encuentra en el Shiur 11'},

    {Categoria:'Gracia, Favor, Gobernantes 78<br><br>', 
    nombre: 'Salmo: 78 (Para recibir gracia y el favor de los gobernantes)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Protege a los profesores y educadores (Recitar en martes)<br>2. Para facilitar la obediencia de los hijos (Recitar en viernes)<br><br> El Material ampliado se encuentra en el Shiur 12'},

    {Categoria:'Adversarios, Oponentes, Opositores, 79<br><br>', 
    nombre: 'Salmo: 79 (Contra los adversarios y los oponentes)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Para apartar la envidia (Recitar en martes)<br>2. Para apartar a los mofadores (Recitar en martes)<br><br> El Material ampliado se encuentra en el Shiur 12'},

    {Categoria:'Librarse, Incredulidad, 80<br><br>', 
    nombre: 'Salmo: 80 (Para librarse de la incredulidad)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Para destacarse en la profesión y/o oficio (Recitar en los días domingos y martes)<br>2. Para librarse de las ideologías de los impíos (Recitar en martes)<br><br> El Material ampliado se encuentra en el Shiur 12'},

    {Categoria:'Incredulidad, Faltas, 81<br><br>', 
    nombre: 'Salmo: 81 (Contra de la incredulidad y las faltas)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Para recitar al inicio del mes (Rósh Jódesh/דשֶׁחֹ אשֹׁר)<br>2. Facilita el aprendizaje de idiomas (Recitar en miércoles)<br>3. Para librarse de las ideologías de los impíos (Recitar en martes)<br><br> El Material ampliado se encuentra en el Shiur 12'},

    {Categoria:'Éxito, Emisario, 82<br><br>', 
    nombre: 'Salmo: 82 (Para obtener éxito a través de un emisario)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Protección contra los ataques de los animales (Recitar en martes)<br>2. Amparo para los que sufren carencias (Recitar en jueves)<br><br> El Material ampliado se encuentra en el Shiur 12'},

    {Categoria:'Librar, Soldados, 83<br><br>', 
    nombre: 'Salmo: 83 (Para librar a los soldados de todo peligro)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Protección contra las conspiraciones de las otras naciones (Recitar en martes)<br>2. Para alcanzar el éxito en los emprendimientos (Recitar en martes)<br><br> El Material ampliado se encuentra en el Shiur 12'},

    {Categoria:'Apartar, Quitar, Mal Olor, 84<br><br>', 
    nombre: 'Salmo: 84 (Para apartar un mal olor corporal)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Para encontrar la vivienda apropiada (Recitar en martes)<br><br> El Material ampliado se encuentra en el Shiur 7'},

    {Categoria:'Reconciliarse, Amigo, 85<br><br>', 
    nombre: 'Salmo: 85 (Para reconciliarse con un amigo)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Para tener una cosecha abundante (Recitar en martes)<br>2. Para vincularse a la energía de la paz (Recitar en viernes)<br><br> El Material ampliado se encuentra en el Shiur 12'},

    {Categoria:'Evitar, Bienestar, 86<br><br>', 
    nombre: 'Salmo: 86 (Evitar el mal y promover el bienestar)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Aleja las fuerzas impuras (Recitar en martes)<br>2. Protección para los hijos de todo peligro (Recitar en martes)<br><br> El Material ampliado se encuentra en el Shiur 12'},

    {Categoria:'Controlar, Bienestar, 87<br><br>', 
    nombre: 'Salmo: 87 (Para controlar el mal y promover el bienestar)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Contra los vicios (Recitar en martes)<br>2. Para librarse de la depresión (Recitar en domingo)<br>3. Para que los hijos sean obedientes/observantes (Recitar en viernes)<br><br> El Material ampliado se encuentra en el Shiur 12'},

    {Categoria:'Promover, Bienestar, 88<br><br>', 
    nombre: 'Salmo: 88 (Para promover el bienestar)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Brinda protección a los líderes (Recitar en martes)<br>2. Para remover los resentimientos (Recitar en martes)<br><br> El Material ampliado se encuentra en el Shiur 12'},

    {Categoria:'Apartar, Enfermedad, Grave, 89<br><br>', 
    nombre: 'Salmo: 89 (Para apartar una enfermedad grave)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Favorece la fidelidad en las pareja (Recitar en viernes)<br>2. Otorga tranquilidad y sabiduría para actuar (Recitar en viernes)<br>3. Para que los niños abracen el estudio (Recitar en miércoles)<br>4. Para quienes perdieron una extremidad o un organo por causa de una enfermedad(Recitar en domingo).<br><br> El Material ampliado se encuentra en el Shiur 12'},

    {Categoria:'Apartar, Fuerza Dañina, Espectros, 90<br><br>', 
    nombre: 'Salmo: 90 (Para apartar fuerzas dañinas y espectros)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Protección contra las pesadillas y las visiones (Recitar en martes)<br>2. Protección durante un viaje nocturno (Recitar en martes)<br>3. Para alejar las adicciones (Recitar en martes)<br>4. Para obtener el fruto del trabajo (Recitar en martes)<br><br> El Material ampliado se encuentra en el Shiur 12'},

    {Categoria:'Librar, Espíritu Impuro, Protección Del Hogar 91<br><br>', 
    nombre: 'Salmo: 91 (Para librar a una persona que esta afiligida por un espíritu impuro y para protección del hogar)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Protección contra las fuerzas dañinas (Recitar en martes)<br>2. Protege de toda epidemia e infecciones (Recitar en martes)<br>3. Atrae la Paz en el hogar/Shalóm Habáit (Recitar en viernes)<br>4. Contrarresta el influjo negativo del mal de ojo (Recitar en martes)<br> El Material ampliado se encuentra en el Shiur 13'},

    {Categoria:'Honores, Fortuna, 92<br><br>', 
    nombre: 'Salmo: 92 (Para alcanzar altos honores y fortuna)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Hacedor de milagros (Recitar en viernes)<br>2. Para restablecer la energía y el vigor (Recitar en martes)<br> El Material ampliado se encuentra en el Shiur 13'},

    {Categoria:'Victoria, Pleito 93<br><br>', 
    nombre: 'Salmo: 93 (Para salir victorioso ante un pleito)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Para problemas de hipertensión (Recitar en domingo)<br>2. Para atraer la abundancia y el bienestar (Recitar en martes)<br> El Material ampliado se encuentra en el Shiur 13'},

    {Categoria:'Adversarios, Persecuciones 94<br><br>', 
    nombre: 'Salmo: 94 (Contra los adversarios y las persecuciones)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Aleja a las personas vengativas (Recitar en martes)<br>2. Proporciona protección a las viudas, a los huérfanos y a los extranjeros<br>3. Facilita la educación de los hijos (Recitar en miércoles)<br>4. Revierte la decisión de un tribunal injusto (Recitar en jueves)<br> El Material ampliado se encuentra en el Shiur 13'},
    
    {Categoria:'Pleitos, Errores, Reparación, Tikún 95<br><br>', 
    nombre: 'Salmo: 95 (Para pleitos y la reparación por los errores cometidos)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Para lograr un buen reposo<br>2. Para no ser pertubado al vivir dentro de una ciudad (Recitar en martes)<br>3. Para recitar en un espacio sagrado (Sinagoga, el Kótel, la tumba de un Tzadík)<br> El Material ampliado se encuentra en el Shiur 13'},

    {Categoria:'Armonia, Paz, Shalom, Hogar, 96<br><br>', 
    nombre: 'Salmo: 96 (Para alcanzar la armonía y la paz en el hogar)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Limpia un espacio físico de energías impuras (Recitar en martes)<br>2. Salmo para que la tierra sea fértil (Recitar en martes)<br>3. Salmo de protección a los árboles (Recitar en martes)<br> El Material ampliado se encuentra en el Shiur 13'},

    {Categoria:'Armonia, Paz, Shalom, Hogar, 97<br><br>', 
    nombre: 'Salmo: 97 (Para alcanzar la armonía y la paz en el hogar)<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br>1. Para liberarse de los adversarios (Recitar en martes)<br>2. Para vincularse con la energía del optimismo y la alegría (Recitar en domingo)<br> El Material ampliado se encuentra en el Shiur 13'},

    {Categoria:', 91<br><br>', 
    nombre: 'Salmo: 91 ()<br><br>', 
    OtrasSegulot: 'Otras Segulot<br><br><br><br> El Material ampliado se encuentra en el Shiur 13'},

    //CONTINUAR SHIUR 14
    //{Categoria:'Contra Enemigos, Salud', nombre: 'Salmo: 2 (Dolores de Cabeza)', OtrasSegulot: '1. Para apaciguar la tormenta interior.2. Para alejar las guerras y a los tiranos que oprimen a un pueblo o a una nación.3. Para recitar cuando un pueblo o una nación tenga que escoger a sus gobernantes.4. Para encontrar abrigo en el Eterno y recuperar la dignidad.5. Para desarrollar la intuición y la facultad de la sanación. El Material ampliado se encuentra en el Shiur 2 '},
    




    
]


const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#boton');
const resultado = document.querySelector('#resultado');


const filtrar = ()=>{
    /*console.log(formulario.value);*/
    resultado.innerHTML = '';
    
    const texto = formulario.value.toLowerCase();

    for(let salmo of salmos){
        let Categoria = salmo.Categoria.toLowerCase();
        
        if(Categoria.indexOf(texto) !== -1){
          
            resultado.innerHTML += `<li>${salmo.Categoria} <h1>${salmo.nombre}</h1> <h3>${salmo.OtrasSegulot}</h3> </li>`;
            //resultado.innerHTML += '<a href="' + salmo.enlace + '" target="_self"'+'><li>' + salmo.nombre + ' -  valor:' + salmo.OtrasSegulot + '</li></a>'
            
            var value = document.getElementById('formulario').value;
            if(value === '' ){resultado.innerHTML = '' }
            //if(value != salmo.Categoria){resultado.innerHTML += '<li> Categoria o Salmo no encontrado... </li>';}
            
        }
       
    }
    
    //if(resultado.innerHTML === ''){resultado.innerHTML = '';}

   

   // else{resultado.innerHTML += '<li> Categoria o Salmo no encontrado... </li>';}
}


//boton.addEventListener('click',filtrar);
formulario.addEventListener('keyup',filtrar);

function ajustarAncho() {
    // Seleccionamos el contenedor y las tarjetas de contenido
    const contenedor = document.querySelector("#listaSegulot");
    const tarjetas = contenedor.querySelectorAll("#li");
  
    // Obtenemos el ancho del contenedor
    const anchoContenedor = contenedor.clientWidth;
  
    // Definimos los anchos de las columnas en función del ancho del contenedor
    const anchoColumna1 = Math.floor(anchoContenedor / 400);
    const anchoColumna2 = Math.floor(anchoContenedor / 600);
    const anchoColumna3 = Math.floor(anchoContenedor / 800);
  
    // Detectamos cuántas columnas tiene nuestro grid
    let numeroColumnas;
    if (anchoContenedor < 600) {
      numeroColumnas = 1;
    } else if (anchoContenedor < 800) {
      numeroColumnas = 2;
    } else {
      numeroColumnas = 3;
    }
  
    // Asignamos la clase correspondiente a cada tarjeta de contenido
    tarjetas.forEach((tarjeta) => {
      if (numeroColumnas === 1) {
        tarjeta.classList.add("columna1");
      } else if (numeroColumnas === 2) {
        tarjeta.classList.add("columna" + tarjeta.dataset.columna);
      } else {
        tarjeta.classList.add("columna3");
      }
    });
  }

  
