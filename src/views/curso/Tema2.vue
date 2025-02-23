<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Prestaciones sociales'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") En Colombia, las prestaciones sociales son derechos laborales que los empleadores deben otorgar a sus trabajadores, con el fin de garantizar su bienestar económico y social durante y después de la relación laboral. 
        p(data-aos="fade-left") Estas prestaciones están reguladas por la Legislación colombiana, buscan proteger al trabajador en diferentes momentos de su vida laboral, tales como en situaciones de enfermedad, incapacidad, maternidad, o al llegar a la jubilación. 

        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0Los Entre las principales prestaciones sociales en Colombia, se incluyen la prima de servicios, las cesantías, los intereses sobre cesantías, las vacaciones y las licencias. El cumplimiento de estas prestaciones es fundamental para asegurar que los trabajadores cuenten con una red de seguridad en caso de necesitar apoyo económico en diversas circunstancias, contribuyendo a la estabilidad y calidad de vida de estos.
        
        

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Prima de servicios

    p.mb-5 La prima de servicios es una prestación social fundamental que reconoce la contribución de los trabajadores al desarrollo de las organizaciones, asegurando una retribución adicional por su esfuerzo y dedicación.

    .bg-full-width.bg-color-3.mb-lg-5.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.order-2
            h2.mb-4(data-aos="flip-up") Prima de servicios 
            p.mb-4(data-aos="fade-right") En el PDF <b>Prima de servicios</b>, se detalla su concepto, los períodos de pago, las fórmulas de liquidación y las situaciones particulares que pueden afectar su cálculo, así como las implicaciones legales del pago extemporáneo. Este análisis permite comprender la importancia de su correcta gestión en el marco de la legislación laboral vigente.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo.</strong> Prima de servicios.

          .col-lg-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/3.png', alt='')
    
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Aporte al sistema general de riesgos laborales 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .p-4.bg-color-2.mb-3(data-aos="fade-right")
          p.mb-0 Las cesantías son una prestación social obligatoria que funciona como un ahorro forzoso para el trabajador, con el objetivo de brindarle un respaldo económico en caso de desempleo. 
        p En situaciones donde el trabajador quede sin empleo, las cesantías le proporcionan un apoyo financiero para cubrir sus necesidades básicas mientras logra ser reincorporado al mercado laboral. 
        p Además, las cesantías no solo tienen como fin ayudar en el caso de desempleo, sino que también sirven como un ahorro a largo plazo que el trabajador puede utilizar en momentos claves de su vida, como para pagar sus estudios, los de su cónyuge o hijos, o para invertir en la compra o mejora de su vivienda, ya sea para él o para su compañero(a) permanente. 
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/4.png", alt="", data-aos="zoom-in")
    
    H5.mb-4 Fórmulas de liquidación
    
    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-5.mb-3.mb-lg-0
        .bg-color-4.p-3.align-content-center(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema2/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5 Opción 1 
              p.mb-0 Salario mensual × días trabajados/360 
    
      .col-lg-5.mb-3.mb-lg-0
        .bg-color-4.p-3.align-content-center(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema2/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5 Opción 2 
              p.mb-0 Sario mensual × meses trabajados/12 
    
    p.mb-4 <b>Nota.</b> El Artículo 7 de la Ley 1 de 1963, establece que el valor del auxilio de transporte debe ser incluido para la liquidación de las prestaciones sociales. 

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/6.png", alt="").mb-4.mb-lg-0
      .col-lg-8(data-aos="fade-right")
        AcordionA(tipo="b")
          .div(titulo="Consignación en fondo de cesantías")
            p.mb-0 Mientras el contrato de trabajo se encuentre vigente, le corresponde al empleador, a más tardar el 14 de febrero de cada año, consignar el valor causado por concepto de cesantías en el fondo elegido por el trabajador. 

    
          .div(titulo="Entrega de cesantías al trabajador")
            p.mb-0 El Ministerio del Trabajo, mediante el Decreto 1562 del 2019, estableció las condiciones bajo las cuales los trabajadores pueden solicitar a sus empleadores o a los fondos de cesantías el pago anticipado de esta prestación social. Estas solicitudes pueden realizarse en los siguientes casos:
            ul.lista-ul--color
              li.mb-1
                i.far.fa-arrow-alt-circle-right.bg-color-6
                | Financiación de vivienda.
              li.mb-1
                i.far.fa-arrow-alt-circle-right.bg-color-6
                | Terminación del contrato de trabajo.
              li.mb-1
                i.far.fa-arrow-alt-circle-right.bg-color-6
                | Situación patronal.
              li.mb-1
                i.far.fa-arrow-alt-circle-right.bg-color-6
                | Prestación del servicio militar.
              li.mb-1
                i.far.fa-arrow-alt-circle-right.bg-color-6
                | Estudios de educación superior.
              li.mb-1
                i.far.fa-arrow-alt-circle-right.bg-color-6
                | Compra de acciones de propiedad del estado.
              li.mb-1
                i.far.fa-arrow-alt-circle-right.bg-color-6
                | Traslado de cesantías.
    
    h2(data-aos="fade-left") Pérdida de las cesantías
    p.mb-5 El Artículo 250 del Código Sustantivo del Trabajo (CST) establece las situaciones en las cuales un trabajador puede perder el derecho a recibir las cesantías. Estos casos son los siguientes:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/7.png")
            .col-lg-7
              h5 Deserción
              p El trabajador pierde el derecho a las cesantías si abandona voluntariamente su trabajo, sin justificación. Es decir, si se ausenta sin una causa válida o no se presenta a trabajar sin aviso previo, lo que se considera como deserción.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/8.png")
            .col-lg-7
              h5 Despido por justa causa
              p El empleador puede despedir al trabajador por justa causa, en cuyo caso también perdería el derecho a recibir las cesantías. Las causas justas incluyen faltas graves como el incumplimiento de sus deberes laborales, conductas deshonestas o desleales, o actos que atenten contra la buena marcha de la empresa.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/9.png")
            .col-lg-7
              h5 Comisión de actos delictivos
              p El trabajador pierde las cesantías si comete actos delictivos contra el empleador, sus familiares dentro del segundo grado de consanguinidad y primero de afinidad, o contra el personal directivo de la empresa.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/10.png")
            .col-lg-7
              h5 Daño material grave
              p Si el trabajador causa daño material grave de manera intencional a los bienes de la empresa, como edificios, maquinaria, materias primas, o cualquier otro equipo o bien relacionado con su trabajo.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/11.png")
            .col-lg-7
              h5 Revelación de secretos
              p El trabajador también pierde el derecho a las cesantías si revela secretos técnicos o comerciales, o divulga información confidencial de la empresa, causando un perjuicio grave a la misma.

    .bg-full-width-2.bg-fondo-2
      .px-4.px-md-5.pb-md-3

        p.mb-4 Aspectos adicionales a tener en cuenta:

        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/12.svg" alt="" style="width: 90px")
              h5.text-center Retención de cesantías
              p.mb-0.text-center El empleador solo podrá retener las cesantías si se ha iniciado una investigación penal formal en contra del trabajador. Esto significa que el proceso debe estar debidamente iniciado antes de hacer cualquier retención, y no se puede hacer de forma arbitraria.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/13.svg" alt="" style="width: 90px")
              h5.text-center Sentencia condenatoria
              p.mb-0.text-center Si un juez penal dicta una sentencia condenatoria contra el trabajador por cualquiera de los hechos mencionados, se considera perdido de manera definitiva el derecho a las cesantías.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/14.svg" alt="" style="width: 90px")
              h5.text-center Proceso judicial
              p.mb-0.text-center Para que el empleador retenga las cesantías en estos casos, la denuncia debe ser interpuesta ante las autoridades competentes. Es solo después de este proceso que se puede tomar una decisión sobre la pérdida del derecho a las cesantías.
    
    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/15.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 En resumen, la pérdida de las cesantías, solo se aplica en situaciones graves y después de un debido proceso legal que incluya la investigación correspondiente y, en su caso, una sentencia judicial condenatoria. Este proceso asegura que los derechos del trabajador sean respetados antes de cualquier decisión que implique la retención o pérdida de sus prestaciones sociales.

    h2(data-aos="fade-left") Interés sobre la cesantías

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .p-4.bg-color-2.mb-3(data-aos="fade-right")
          p.mb-0 Los intereses sobre las cesantías están regulados por el Artículo 1 de la Ley 52 de 1975 y el Decreto 116 de 1976, los cuales establecen que el empleador debe pagar al trabajador intereses equivalentes al 12 % anual sobre el saldo de las cesantías acumuladas a su favor. 
        p Este pago debe realizarse a más tardar el 31 de enero del año siguiente, o en la fecha de retiro del trabajador, si este evento ocurre antes de dicha fecha.
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/16.png", alt="", data-aos="zoom-in")
    

    h2(data-aos="fade-left") Fórmula para el cálculo de intereses a las cesantías 
    p.mb-5 El cálculo para determinar el monto de los intereses sobre las cesantías, debe realizarse tomando como base el valor de las cesantías acumuladas, el cual corresponde a un salario mensual (o su equivalente proporcional en caso de fracción de año trabajado).

    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-5.mb-3.mb-lg-0
        .bg-color-4.p-3.align-content-center(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema2/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5 Opción 1 
              p.mb-0 Valor de las cesantías × días laborados × 12 % (o 0,12)/360.
    
      .col-lg-5.mb-3.mb-lg-0
        .bg-color-4.p-3.align-content-center(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema2/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5 Opción 2 
              p.mb-0 Valor de las cesantías × meses laborados × 12 % (o 0,12)/12.
    

    p.mb-4 Es importante tener presente lo regulado a través del Decreto 116 de 1976, con el que se reglamentó la Ley 52 de 1975, a saber: 

    .bg-full-width.bg-color-5.mb-5
      .px-4.px-md-5.py-4
        div
          .row.justify-content-between.align-items-center
            .col-lg-7(data-aos="fade-left").order-2
              ul.lista-ul--color
                li.mb-1
                  i.far.fa-arrow-alt-circle-right.bg-color-6
                  | En caso de muerte del trabajador, los intereses a las cesantías deberán ser pagados a quienes corresponda el pago de las cesantías. 
                li.mb-1
                  i.far.fa-arrow-alt-circle-right.bg-color-6
                  | El empleador debe entregar a sus trabajadores, junto con el pago de los intereses, el comprobante de pago con los siguientes datos: monto de las cesantías usado como base de liquidación, período en que se causaron los intereses y valor de los intereses. 
                
            .col-lg-4(data-aos="zoom-in").order-1.mb-3.mb-lg-0
              img.img-fluid(src='@/assets/curso/tema2/17.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    h2(data-aos="fade-left") Sanciones por omisión en la consignación y pago de cesantías e intereses de a las cesantías

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .p-4.bg-color-4.mb-3(data-aos="fade-right")
          p.mb-0 Si el empleador no realiza la consignación de las cesantías dentro del plazo establecido, se expone a una sanción conforme al numeral tercero del Artículo 99 de la Ley 50 de 1990. Esta sanción consiste en una multa equivalente a un día de salario por cada día de retraso en la consignación.
        p.mb-0 En cuanto al incumplimiento en el pago de los intereses sobre las cesantías, el empleador también enfrentará una penalización, tal como lo establece el numeral 3 del Artículo 1 de la Ley 52 de 1975. En este caso, deberá indemnizar al trabajador con un monto adicional, equivalente al valor de los intereses causados por el retraso, el cual se pagará solo una vez. 
    
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/18.png", alt="", data-aos="zoom-in")

    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Prima de servicios

    p.mb-5 La prima de servicios es una prestación social fundamental que reconoce la contribución de los trabajadores al desarrollo de las organizaciones, asegurando una retribución adicional por su esfuerzo y dedicación.

    .bg-full-width.bg-color-3.mb-lg-5
      .px-4.p-md-5
        p.mb-4 Las vacaciones son un derecho fundamental para los trabajadores, garantizando el descanso necesario tras un período laboral continuo.
        .row.justify-content-center.align-items-center
          .col-lg-8.order-2
            h2.mb-4(data-aos="flip-up") Vacaciones 
            p.mb-4(data-aos="fade-right") En el PDF Vacaciones, se analizan aspectos clave como los criterios para su concesión, las modalidades de acumulación, compensación y fraccionamiento, así como las disposiciones legales relacionadas con su liquidación. Este enfoque integral permite comprender cómo asegurar el respeto por los derechos laborales y promover condiciones dignas para los empleados.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo.</strong> Vacaciones 

          .col-lg-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/19.png', alt='')

    

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.gerencie.com/pago-de-las-cesantias-en-la-renovacion-del-contrato-de-trabajo-a-termino-fijo.html " target="_blank" rel="noopener noreferrer") Pago de cesantías en la renovación de contrato de trabajo a término fijo Gerencie.com. (2025, enero 27). Aportes parafiscales. Gerencie.com 
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.minjusticia.gov.co/programas-co/LegalApp/Paginas/Que-se-puede-descontar-del-salario-de-un-trabajador.aspx" target="_blank" rel="noopener noreferrer") Ministerio de Justicia. (2025, enero 27). ¿Qué se puede descontar del salario de un trabajador? Ministerio de Justicia.

           

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/1uXwNBIIXok?si=s6y0OLGU3mPyHe3U" target="_blank" rel="noopener noreferrer") García Asociados. (2019, 25 de junio). NO SE PUEDEN EMBARGAR LAS PRESTACIONES ART 10 LSS. [Video]. YouTube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
