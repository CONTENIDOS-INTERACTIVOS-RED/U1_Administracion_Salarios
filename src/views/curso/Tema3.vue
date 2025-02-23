<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Marco legal del sistema de salarios en Colombia'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.mb-3.mb-lg-0
        .p-4.bg-color-4.mb-3(data-aos="fade-right")
          p El marco legal del sistema de salarios en Colombia, está fundamentado en una serie de normativas y principios constitucionales que buscan garantizar la justicia laboral, el derecho a un trabajo digno y la protección social de los trabajadores.
          p.mb-0 En este sentido, la Constitución Política de Colombia de 1991, juega un papel crucial al establecer la base de los derechos laborales, incluidos el salario y las prestaciones sociales.
        p.mb-0 A partir de este fundamento constitucional, el Código Sustantivo del Trabajo (CST), regula las relaciones laborales y establece las normas que rigen los pagos, beneficios y la formalización del empleo en el país. Además, a lo largo del tiempo, el Estado ha emitido diversas leyes y decretos que ajustan y perfeccionan los derechos y obligaciones laborales, buscando adaptarse a los cambios socioeconómicos y a las exigencias internacionales.  
    
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/1.png", alt="", data-aos="zoom-in")
    
    p.mb-5 En este contexto, es fundamental analizar la legislación principal que regula el salario, la normativa más reciente en cuanto al salario mínimo y las reformas que se han implementado para proteger los derechos laborales, especialmente en épocas de crisis y cambios económicos. 
    
    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] Legislación principal
    
    p.mb-5 Conozcamos cuál es la legislación principal en la materia:

    TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Constitución Política de Colombia" :icon="require('@/assets/bullets/icon-tab-c-4.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Constitución Política de Colombia
            p La Constitución Política de Colombia de 1991, es la norma fundamental que consagra el derecho al trabajo digno en su Artículo 25, el cual establece que "toda persona tiene derecho a un trabajo en condiciones dignas y justas".
            p ste principio se extiende a la regulación del salario, estableciendo un piso mínimo para garantizar el bienestar de los trabajadores. 

    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema3/2.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Código sustantivo de trabajo" :icon="require('@/assets/bullets/icon-tab-c-4.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Código sustantivo de trabajo
            p El Código Sustantivo del Trabajo (CST), es la principal norma que regula las relaciones laborales en Colombia, incluyendo los aspectos relacionados con el salario. Esta Ley, promulgada en 1950 y modificada a lo largo de los años, organiza los derechos laborales y define las condiciones para los pagos salariales, las prestaciones sociales, los contratos de trabajo y la protección de los derechos fundamentales de los trabajadores. 
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema3/3.png', alt='')
      
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Código sustantivo de trabajo" :icon="require('@/assets/bullets/icon-tab-c-4.svg')")
        .row.justify-content-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Estructura del código sustantivo de trabajo
            p El CST está conformado por diversos títulos que tratan sobre las relaciones laborales individuales y colectivas, las formas de contratación, las prestaciones sociales y el sistema de seguridad social, siendo un documento clave para entender el entorno laboral en Colombia. Su propósito es el de garantizar el cumplimiento de los derechos de los trabajadores y regular las obligaciones del empleador, con el objetivo de evitar abusos y asegurar condiciones de trabajo justas y equilibradas. 
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema3/4.png', alt='')
    
    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Normativa sobre salario actual

    p.mb-5 La normativa sobre el salario en Colombia establece lineamientos clave para garantizar una remuneración justa y adecuada a las condiciones económicas y sociales del país.

    .bg-full-width.bg-color-3.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.order-2
            h2.mb-4(data-aos="flip-up") Normativa sobre salario actual 
            p.mb-4(data-aos="fade-right") En el PDF <b>Normativa sobre salario actual</b>, se analizan las disposiciones legales relacionadas con el salario mínimo, las escalas salariales del sector público y las políticas laborales recientes, destacando su impacto en la equidad, la eficiencia del mercado laboral y el bienestar de los trabajadores.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_5.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo.</strong> Normativa sobre salario actual.

          .col-lg-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/5.png', alt='')
    
    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Cambios recientes en la normativa

    p.mb-5 Ahora, estudiemos los cambios recientes en la normativa:

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-2(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema3/6.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-1(data-aos="fade-right")
        AcordionA(tipo="b")
          .div(titulo="Reducción de jornada laboral")
            p.mb-0 En los últimos años, se han implementado reformas laborales que buscan adaptarse a la nueva realidad económica del país. Uno de los cambios más significativos es la reforma laboral aprobada en el 2022, que incluye la reducción de jornada laboral como una medida para mejorar la calidad de vida de los trabajadores. 
            p.mb-0 Esta reforma propone una jornada laboral de 42 horas semanales en lugar de las 48 horas tradicionales. La reducción de la jornada laboral tiene como objetivo promover un mejor equilibrio entre la vida personal y profesional, así como incentivar el empleo formal y reducir los niveles de desempleo. 
            p.mb-0 Esta reforma también impulsa la flexibilización del trabajo remoto y las condiciones laborales en tiempos de pandemia, con el fin de adecuarse a las nuevas modalidades de empleo que han surgido debido a los avances tecnológicos y la necesidad de adaptarse a las crisis sanitarias globales.
    
          .div(titulo="Escalas salariales empleados públicos")
            p.mb-0 Un cambio reciente importante es el Decreto 905 del 2023, que establece nuevas escalas salariales para los empleados públicos. Este Decreto fue resultado de una negociación entre el gobierno y los sindicatos del sector público, y tiene como objetivo mejorar la distribución salarial en las entidades estatales. 
            p.mb-0 El Decreto 905, establece un sistema de escalas salariales diferenciadas para los trabajadores públicos, ajustando los salarios, de acuerdo con la complejidad y la jerarquía de las funciones desempeñadas. 
            p.mb-0 Esta medida busca, además, hacer más eficiente el servicio público y garantizar una remuneración justa y acorde con las responsabilidades de cada cargo dentro de las entidades del Estado.
          .div(titulo="Salario para trabajadores informales")
            p.mb-0 Otro cambio reciente tiene que ver con los salarios para trabajadores informales, donde se han implementado incentivos para formalizar el empleo y garantizar que estos trabajadores puedan acceder a las prestaciones sociales, principalmente a la seguridad social. 
            p.mb-0 Las autoridades laborales han propuesto ajustes en las normativas relacionadas con el trabajo en plataformas digitales y los trabajadores autónomos, con el fin de regular este tipo de empleos que representan una parte significativa de la fuerza laboral en Colombia.

    #t_3_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.4] Protección y derechos de los trabajadores

    p.mb-5 La protección y los derechos laborales son pilares fundamentales para garantizar condiciones dignas de trabajo y prevenir abusos en el ámbito laboral.

    .bg-full-width.bg-color-3.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8.order-2
            h2.mb-4(data-aos="flip-up") Protección y derechos de los trabajadores 
            p.mb-4(data-aos="fade-right") En el PDF <b>Protección y derechos de los trabajadores</b>, se analizan los aspectos clave de la legislación colombiana, como el derecho a un salario justo, la regulación del despido injustificado y las garantías para madres y padres cabeza de hogar. Este enfoque integral proporciona herramientas para comprender y aplicar las normativas que promueven la equidad y la estabilidad en las relaciones laborales.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_6.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo.</strong> Protección y derechos de los trabajadores.

          .col-lg-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/7.png', alt='')
    
    
    

    

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.gerencie.com/reduccion-de-la-jornada-laboral-cuando-hay-festivos.html" target="_blank" rel="noopener noreferrer") Reducción de la jornada laboral Gerencie.com. (2025, enero 27). Reducción de la jornada laboral. Gerencie.com
            
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.mintrabajo.gov.co/web/guest/inicio" target="_blank" rel="noopener noreferrer") Ministerio de Trabajo. (2025, enero 27). Mi calculadora laboral. Ministerio de Trabajo.


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/nje7LSdWo6c?si=TO6NaYgeou5uatXh" target="_blank" rel="noopener noreferrer") Procuraduría General de la Nación. (2020, 22 de noviembre). La procu defiende los derechos del trabajador. [Video]. YouTube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              'El porcentaje máximo permitido de salario en especie cuando se devenga más de un salario mínimo es de:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: '60 %',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: '50 %',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: '40 %',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: '70 %',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              'Según el artículo 132 del Código Sustantivo del Trabajo, el salario en especie no puede superar el 50% del salario total cuando este excede un salario mínimo. Actualmente el recargo nocturno equivale al:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: '35 %',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: '25 %',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: '75 %',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: '50 %',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'El recargo nocturno es un adicional del 35% sobre el salario ordinario y aplica cuando el trabajador labora entre las 9:00 p.m. y las 6:00 a.m., de acuerdo con lo estipulado en el artículo 161 del Código Sustantivo del Trabajo. Si Juan Camilo gana tres salarios mínimos, tiene derecho a que se le pague el auxilio de transporte. Tal enunciado es:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: true,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              'El auxilio de transporte solo se paga a los trabajadores que devengan hasta dos salarios mínimos. Si Juan Camilo gana tres salarios mínimos, no tendría derecho al auxilio de transporte, según lo establece la Ley 15 de 1959. El salario base para calcular la prima de servicios es el promedio de lo devengado en los seis (6) meses anteriores a su causación. Su liquidación debe realizarse por semestre laborado o proporcionalmente al tiempo trabajado aplicando la siguiente fórmula: salario + auxilio de transporte × número de días laborados / 360. Tal enunciado es:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'verdadero',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'falso',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              'La prima de servicios se calcula con base en lo devengado durante el semestre correspondiente, y la fórmula para su liquidación es correcta. Según la legislación, el salario base incluye el salario ordinario y el auxilio de transporte. El auxilio de transporte constituye salario y, por tanto, debe incluirse para la liquidación de los aportes a seguridad social. Este enunciado es:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: true,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
