export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Conceptos básicos de salario y sueldo',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Elementos de un sistema de salarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Salario y modalidades de salario',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Elementos que constituyen salario',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Elementos que no constituyen un salario',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Descuentos permitidos y no permitidos',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Auxilios',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Aportes al sistema de seguridad social',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Aporte al sistema general de riesgos laborales ',
            hash: 't_1_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.8',
            titulo: 'Fondo de solidaridad pensional ',
            hash: 't_1_8',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.9',
            titulo: 'Aportes parafiscales  ',
            hash: 't_1_9',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Prestaciones sociales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Prima de servicios',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Cesantías',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Vacaciones',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Marco legal del sistema de salarios en Colombia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Legislación principal',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Normativa sobre salario actual',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Normativa sobre salario actual',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Cambios recientes en la normativa',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Protección y derechos de los trabajadores',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Ramírez, M. & Tejada Betancourt, L. (Il.). (2019). Administración de salarios y elaboración de nóminas: ( ed.). Universidad Abierta para Adultos (UAPA). ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente',
    },
    {
      referencia:
        'Decretos Salariales 905 de 2023 - Gestor Normativo. (s/f). Gov.co. Junio de 2023. Colombia. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=210830 ',
    },
    {
      referencia:
        'Arango, L. E., Ávila-Montealegre, Ó., Bonilla-Mejía, L., Botero-García, J., Caicedo-García, É., Dávalos-Álvarez, E., ... & Morales-Zurita, L. (2022). Efectos macroeconómicos del salario mínimo en Colombia. Revista Ensayos Sobre Política Económica; No. 103, Septiembre 2022. Pág.: 1-117.',
      link: '',
    },
    {
      referencia:
        ' “ABC de la nómina” - Actualícese. (2023, octubre 1). Actualícese |; Actualícese. ',
      link:
        'https://actualicese.com/nomina/?utm_source=actualicese_nuevo_menu&utm_medium=tematicas&utm_campaign=derecho-laboral',
    },
    {
      referencia:
        'LEY 52 DE 1975. (s/f). Avance Jurídico Casa Editorial Ltda. Enero de 1976. Colombia ',
      link:
        'https://www.camara.gov.co/sites/public_html/leyes_hasta_1991/ley/1975/ley_0052_1975.html ',
    },
    {
      referencia:
        'Leyes desde 1992 - Vigencia expresa y control de constitucionalidad [CODIGO_SUSTANTIVO_TRABAJO]. (s/f). Senado de la República de Colombia. Junio de 1951.Colombia. ',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/codigo_sustantivo_trabajo.html',
    },
    {
      referencia:
        'Cortes Gutiérrez, S. P. (2022). Beneficios para empleados a corto plazo dentro de un contrato laboral según la legislación colombiana (Generación de contenidos impresos N.º 27). Ediciones Universidad Cooperativa de Colombia. ',
      link: 'http://dx.doi.org/10.16925/gcnc.32',
    },
    {
      referencia:
        'Monografías.com. (2015). Administración de sueldos y salarios. Monografías.com. ',
      link:
        'https://www.monografias.com/trabajos104/administracion-sueldos-salarios/administracion-sueldos-salarios',
    },
    {
      referencia:
        'Bernal Medina, F.  (2024).  Evaluación de las garantías laborales y su impacto en la terminación de vínculos laborales en Colombia.    Universidad Cooperativa de Colombia, Facultad de Ciencias Económicas, Administrativas y Contables, Contaduría Pública, Villavicencio.  Disponible en: ',
      link: 'https://hdl.handle.net/20.500.12494/55414',
    },
  ],
  glosario: [
    {
      termino: 'Aporte al sistema general de riesgos laborales',
      significado:
        'Contribución que realiza el empleador y el trabajador al sistema que protege a los empleados en caso de accidentes de trabajo y enfermedades laborales, con el fin de asegurar su bienestar y cobertura de los riesgos asociados a su actividad profesional.',
    },
    {
      termino: 'Aportes parafiscales',
      significado:
        'Contribuciones que deben hacer los empleadores y trabajadores al Estado, destinados a financiar programas sociales, como el SENA, ICBF, y cajas de compensación familiar. Son pagos adicionales al salario y forman parte del sistema de seguridad social.',
    },
    {
      termino: 'Aporte al sistema general de riesgos laborales',
      significado:
        'Contribución que realiza el empleador y el trabajador al sistema que protege a los empleados en caso de accidentes de trabajo y enfermedades laborales, con el fin de asegurar su bienestar y cobertura de los riesgos asociados a su actividad profesional.',
    },
    {
      termino: 'Aportes al sistema de seguridad social',
      significado:
        'Son las contribuciones que empleadores y trabajadores realizan para financiar los servicios de salud, pensiones y riesgos laborales, con el fin de garantizar la cobertura en estos ámbitos para los empleados.',
    },
    {
      termino: 'Auxilios',
      significado:
        'Son ayudas económicas adicionales que los empleadores proporcionan a sus empleados para ciertos fines, como el auxilio de transporte, alimentación, entre otros. No siempre se consideran parte del salario.',
    },
    {
      termino: 'Cambios recientes en la normativa',
      significado:
        'Modificaciones que se han realizado en las leyes y regulaciones laborales que afectan el sistema de salarios, buscando adaptar las normativas a las nuevas realidades sociales y económicas.',
    },
    {
      termino: 'Cesantías',
      significado:
        'Son una prestación social que consiste en el pago de un salario adicional al trabajador por cada año trabajado. Se destina a su fondo de cesantías, para que el trabajador lo utilice en caso de terminar su contrato laboral.',
    },
    {
      termino: 'Descuentos permitidos',
      significado:
        'Deducciones que el empleador puede realizar del salario del trabajador, de acuerdo con la Ley, tales como aportes a la seguridad social, retenciones en la fuente o pagos de deudas que el empleado haya adquirido con la empresa.',
    },
    {
      termino: 'Descuentos no permitidos',
      significado:
        'Descuentos que no están autorizados por la Ley y que no deben hacerse sobre el salario del trabajador, como por ejemplo descuentos arbitrarios o aquellos que no tienen una base legal.',
    },
    {
      termino: 'Elementos que constituyen salario',
      significado:
        'Ingresos que el trabajador recibe por la prestación de sus servicios, los cuales son considerados como salario en especie o en dinero, tales como el salario base, comisiones, bonificaciones, entre otros.',
    },
    {
      termino: 'Elementos que No constituyen un salario',
      significado:
        'Aquellos pagos o beneficios que el empleador otorga al trabajador pero que no se consideran parte del salario, tales como los auxilios, indemnizaciones, o reembolsos de gastos relacionados con el trabajo.',
    },
    {
      termino: 'Fondo de solidaridad pensional',
      significado:
        'Es un fondo destinado a complementar las pensiones de los trabajadores de menores ingresos, creado con el objetivo de ayudar a financiar las pensiones de las personas que no alcanzan a cumplir con el monto mínimo de la pensión.',
    },
    {
      termino: 'Legislación principal',
      significado:
        'Conjunto de leyes fundamentales que regulan las relaciones laborales y el sistema de salarios en un país. En Colombia, la legislación principal incluye el Código Sustantivo del Trabajo y otras normativas relacionadas con el trabajo y los derechos laborales.',
    },
    {
      termino: 'Marco legal del sistema de salarios en Colombia',
      significado:
        'Es el conjunto de normas, leyes y regulaciones que rigen los salarios en Colombia, abarcando aspectos como el salario mínimo, las prestaciones sociales y los derechos de los trabajadores en relación a su remuneración.',
    },
    {
      termino: 'Normativa sobre salario actual',
      significado:
        'Conjunto de reglas que rigen el salario en la actualidad, incluyendo el salario mínimo legal, las normas sobre horas extras, y otros aspectos relacionados con la remuneración de los trabajadores, actualizados conforme a las condiciones económicas del país.',
    },
    {
      termino: 'Prima de servicios',
      significado:
        'Es una prestación social obligatoria que se paga a los trabajadores en dos períodos al año (junio y diciembre), consistente en un pago adicional equivalente a un mes de salario por cada año trabajado, o proporcionalmente si se trabajó menos tiempo.',
    },
    {
      termino: 'Prestaciones sociales',
      significado:
        'Son los beneficios adicionales que los empleadores deben otorgar a sus empleados, además del salario, y que están destinados a garantizar el bienestar del trabajador. Incluyen la prima de servicios, cesantías, vacaciones, entre otros.',
    },
    {
      termino: 'Protección y derechos de los trabajadores',
      significado:
        'Se refiere al conjunto de garantías legales que protegen los derechos de los trabajadores en su lugar de trabajo, como el derecho a un salario justo, a condiciones laborales adecuadas, a la seguridad social, y a la estabilidad laboral.',
    },
    {
      termino: 'Salario',
      significado:
        'Es la compensación económica que recibe un trabajador a cambio de sus servicios. El salario puede ser en efectivo o en especie y debe cumplir con los mínimos establecidos por la Ley, incluyendo el salario mínimo legal, según el tipo de trabajo y las condiciones.',
    },
    {
      termino: 'Salario y modalidades de salario',
      significado:
        'Compensación que el trabajador recibe por su labor, que puede adoptar diversas formas como salario base, salario por comisión, salario fijo, o salario variable dependiendo de las condiciones pactadas con el empleador.',
    },
    {
      termino: 'Vacaciones',
      significado:
        'Derecho laboral que otorga el empleador al trabajador, consistente en un período de descanso remunerado, que suele ser de 15 días por cada año de trabajo continuo, con el objetivo de garantizar el bienestar y la salud del trabajador.',
    },
  ],
}
