(() => {
  const popupData = {
    definicion: {
      title: "¿Qué significa para mí la cultura del cuidado?",
      text: "Para mí, la cultura del cuidado es una manera de vivir mi formación profesional con sensibilidad humana. Me recuerda que no basta con prepararme técnicamente: también debo aprender a mirar al otro con respeto, reconocer su dignidad y responder a sus necesidades con responsabilidad. Esta idea se relaciona con la comprensión del ser humano como relacional e interdependiente, donde el cuidado aparece como un valor ético fundamental (Estévez López y Depalma, 2023).",
      key: "Mi idea clave: cuidar es reconocer la dignidad del otro y actuar con humanidad."
    },
    motor: {
      title: "El cuidado como motor de mi servicio",
      text: "Considero que el servicio tiene sentido cuando nace de la escucha y no de la imposición. En mis futuras experiencias laborales, quiero servir desde la calidez, la amabilidad y la corresponsabilidad, evitando actitudes paternalistas o autoritarias. El cuidado auténtico debe fortalecer la autonomía de las personas y no hacerlas dependientes (Estévez López y Depalma, 2023).",
      key: "Mi idea clave: servir no es imponer soluciones, sino acompañar con respeto."
    },
    perfil1: {
      title: "Me reconozco en relación con otros",
      text: "Como estudiante, comprendo que mi perfil profesional no se forma únicamente con conocimientos, sino también con la capacidad de relacionarme de forma humana. Nadie vive ni trabaja completamente solo; por eso, mi profesión debe orientarse al encuentro, la solidaridad y la atención a quienes se encuentran en situaciones de vulnerabilidad. El cuidado de los semejantes expresa una dimensión humana presente desde nuestros orígenes (Estévez López y Depalma, 2023).",
      key: "Mi idea clave: mi profesión también debe ser una forma de encuentro humano."
    },
    perfil2: {
      title: "Cuidar también es actuar con justicia",
      text: "Para mí, cuidar no significa solamente tener buenas intenciones. También implica actuar con justicia, responsabilidad y respeto por la dignidad de cada persona. En mi formación profesional, esto me exige pensar en las consecuencias de mis decisiones y en la manera como puedo aportar al bienestar de la comunidad. El cuidado puede comprenderse como un valor ético al mismo nivel que la justicia (Estévez López y Depalma, 2023).",
      key: "Mi idea clave: cuidar con justicia es servir respetando la dignidad humana."
    },
    perfil3: {
      title: "Miro a la persona de forma integral",
      text: "Una de las enseñanzas más importantes para mi perfil profesional es que las personas no se reducen a una sola necesidad. Cada ser humano tiene dimensiones físicas, sociales, emocionales y espirituales que deben ser tenidas en cuenta. Por eso, quiero desarrollar una mirada más integral, capaz de escuchar la realidad completa de quienes me rodean. Esta visión del cuidado se vincula con una comprensión amplia de la salud y de la vida humana (Estévez López y Depalma, 2023).",
      key: "Mi idea clave: cuidar es mirar a la persona completa, no solo una parte de su situación."
    },
    perfil4: {
      title: "Quiero servir con honradez",
      text: "Mi formación como estudiante también debe reflejarse en la honradez de mis acciones. No quiero que mi profesión se limite a cumplir tareas, sino que exprese responsabilidad, honorabilidad y compromiso con el bien común. García Herreros resalta la necesidad de una conducta basada en la equidad, la honradez y el cambio interior como camino para transformar la sociedad (García Herreros, 2012; 2012b).",
      key: "Mi idea clave: la calidad profesional también se demuestra en la ética con la que se sirve."
    },
    vida1: {
      title: "Mi referente: tía Luz Doris",
      text: "Mi tía Luz Doris ha sido un referente importante en mi manera de entender el servicio. En ella veo una actitud desinteresada, proactiva y generosa, porque muchas veces ayuda incluso cuando no tiene mucho para dar. Su ejemplo me enseña que el cuidado no siempre empieza en grandes instituciones, sino en gestos cotidianos de amor, apoyo y persistencia. También me permite reconocer el valor de quienes, desde la vida diaria, encarnan el arte de cuidar.",
      key: "Mi idea clave: los referentes cercanos también forman mi vocación de servicio."
    },
    vida2: {
      title: "El arte de cuidar",
      text: "Cuando pienso en el arte de cuidar, lo relaciono con la capacidad de estar presente ante la fragilidad del otro. Mi experiencia familiar me ha mostrado que ayudar no siempre significa tener todos los recursos, sino tener disposición, sensibilidad y amor para acompañar. El cuidado se entiende como una disposición que protege y promueve la dignidad de los seres humanos, especialmente cuando existe fragilidad (Estévez López y Depalma, 2023).",
      key: "Mi idea clave: cuidar es responder con sensibilidad ante la fragilidad del otro."
    },
    md1: {
      title: "Reconciliación y fraternidad",
      text: "La Organización Minuto de Dios aporta a mi perfil porque me invita a ver el servicio como una misión que puede reconstruir vínculos. Su enfoque me ayuda a comprender que no basta con hablar de solidaridad: es necesario realizar acciones personales que fortalezcan la fraternidad, el amor y la reconciliación. García Herreros plantea la reconciliación como una necesidad social que empieza desde el corazón y desde acciones concretas (García Herreros, 2009b; 2009c).",
      key: "Mi idea clave: la reconciliación comienza con decisiones personales que construyen comunidad."
    },
    md2: {
      title: "Obras con sentido social",
      text: "También valoro que Minuto de Dios relacione el servicio con obras concretas para mejorar la vida de las personas. Esto me ayuda a entender que mi formación profesional debe tener impacto social y no quedarse solo en ideas. La misión de servir a los más necesitados se expresa en acciones, recursos y proyectos que buscan bienestar, alegría y apoyo real para la comunidad (García Herreros, 2009c; 2012).",
      key: "Mi idea clave: el cuidado se hace visible cuando se convierte en acciones concretas."
    },
    conclusiones: {
      title: "Mis conclusiones",
      list: [
        "Como estudiante, entiendo que la cultura del cuidado fortalece mi perfil profesional porque une humanidad, justicia, honradez y compromiso social.",
        "Quiero que mi servicio parta de la escucha, la calidez y el respeto por la autonomía de las personas, evitando cualquier forma de imposición.",
        "Mi tía Luz Doris inspira mi vocación de servicio porque me muestra que cuidar también significa amar, persistir y ayudar desde lo cotidiano.",
        "La Organización Minuto de Dios me ayuda a comprender el servicio como una forma de reconciliación, fraternidad y transformación social mediante acciones concretas."
      ]
    }
  };

  const activity1 = [
    {
      question: "1. ¿Por qué considero importante la cultura del cuidado en mi perfil profesional?",
      options: [
        "Porque reemplaza la formación ética por acciones técnicas.",
        "Porque me ayuda a reconocer la dignidad, la interdependencia y la responsabilidad hacia los demás.",
        "Porque evita cualquier relación con la comunidad.",
        "Porque solo se aplica a profesiones de salud."
      ],
      answer: 1
    },
    {
      question: "2. ¿Qué debo evitar cuando sirvo desde la cultura del cuidado?",
      options: [
        "La escucha mutua y la corresponsabilidad.",
        "La autonomía de las personas.",
        "El paternalismo y el autoritarismo.",
        "La atención diferenciada."
      ],
      answer: 2
    },
    {
      question: "3. ¿Qué dimensiones debo tener en cuenta para mirar a la persona de forma integral?",
      options: [
        "Solo la dimensión física.",
        "Dimensiones físicas, sociales, emocionales y espirituales.",
        "Solo la dimensión económica.",
        "Exclusivamente la productividad laboral."
      ],
      answer: 1
    },
    {
      question: "4. ¿Quién inspira mi perfil servidor desde mi experiencia de vida?",
      options: [
        "Mi tía Luz Doris.",
        "Un docente universitario.",
        "Un compañero de trabajo.",
        "Un personaje histórico anónimo."
      ],
      answer: 0
    },
    {
      question: "5. ¿Cómo aporta la Organización Minuto de Dios a mi perfil servidor?",
      options: [
        "Promoviendo indiferencia ante los problemas sociales.",
        "Ayudándome a comprender el servicio como misión, reconciliación y acción social concreta.",
        "Reemplazando la acción personal por discursos sin práctica.",
        "Limitando el servicio a actividades individuales sin comunidad."
      ],
      answer: 1
    }
  ];

  const activity2 = [
    { statement: "1. Mi servicio debe estar guiado por la dignidad, la honradez y la reconciliación.", answer: true },
    { statement: "2. Servir desde el cuidado significa imponer soluciones sin escuchar.", answer: false },
    { statement: "3. La cultura del cuidado promueve autonomía y corresponsabilidad.", answer: true },
    { statement: "4. Mis experiencias de vida no influyen en la construcción de mi perfil servidor.", answer: false },
    { statement: "5. Minuto de Dios me invita a pensar el servicio desde la fraternidad y las obras sociales concretas.", answer: true }
  ];

  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => document.querySelectorAll(selector);

  const infoModal = $("#infoModal");
  const modalContent = $("#modalContent");
  const closeInfo = $("#closeInfo");
  const activity1Modal = $("#activity1Modal");
  const activity2Modal = $("#activity2Modal");
  const closeActivity1 = $("#closeActivity1");
  const closeActivity2 = $("#closeActivity2");
  const openActivity1 = $("#openActivity1");
  const openActivity2 = $("#openActivity2");
  const activity1Form = $("#activity1Form");
  const activity2Form = $("#activity2Form");
  const gradeActivity1 = $("#gradeActivity1");
  const gradeActivity2 = $("#gradeActivity2");
  const activity1Result = $("#activity1Result");
  const activity2Result = $("#activity2Result");

  function openModal(modal) { modal.classList.remove("hidden"); }
  function closeModal(modal) { modal.classList.add("hidden"); }

  $$('[data-popup]').forEach((button) => {
    button.addEventListener('click', () => {
      const item = popupData[button.dataset.popup];
      if (!item) return;
      if (item.list) {
        modalContent.innerHTML = `
          <h2 class="popup-title" id="modalTitle">${item.title}</h2>
          <ul class="popup-list">${item.list.map(point => `<li>${point}</li>`).join('')}</ul>
        `;
      } else {
        modalContent.innerHTML = `
          <h2 class="popup-title" id="modalTitle">${item.title}</h2>
          <p class="popup-text">${item.text}</p>
          <div class="key-box"><strong>Idea clave:</strong> ${item.key}</div>
        `;
      }
      openModal(infoModal);
    });
  });

  closeInfo.addEventListener('click', () => closeModal(infoModal));
  closeActivity1.addEventListener('click', () => closeModal(activity1Modal));
  closeActivity2.addEventListener('click', () => closeModal(activity2Modal));

  [infoModal, activity1Modal, activity2Modal].forEach((modal) => {
    modal.addEventListener('click', (event) => {
      if (event.target === modal) closeModal(modal);
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal(infoModal);
      closeModal(activity1Modal);
      closeModal(activity2Modal);
    }
  });

  function renderActivity1() {
    activity1Result.innerHTML = '';
    activity1Form.innerHTML = activity1.map((item, index) => {
      const options = item.options.map((option, optionIndex) => `
        <label class="option"><input type="radio" name="a1-${index}" value="${optionIndex}">${option}</label>
      `).join('');
      return `<section class="question"><h3>${item.question}</h3>${options}</section>`;
    }).join('');
  }

  function renderActivity2() {
    activity2Result.innerHTML = '';
    activity2Form.innerHTML = activity2.map((item, index) => `
      <section class="question">
        <h3>${item.statement}</h3>
        <label class="option"><input type="radio" name="a2-${index}" value="true">Verdadero</label>
        <label class="option"><input type="radio" name="a2-${index}" value="false">Falso</label>
      </section>
    `).join('');
  }

  openActivity1.addEventListener('click', () => { renderActivity1(); openModal(activity1Modal); });
  openActivity2.addEventListener('click', () => { renderActivity2(); openModal(activity2Modal); });

  gradeActivity1.addEventListener('click', () => {
    let score = 0;
    let unanswered = 0;
    activity1.forEach((item, index) => {
      const selected = document.querySelector(`input[name="a1-${index}"]:checked`);
      if (!selected) { unanswered++; return; }
      if (Number(selected.value) === item.answer) score++;
    });
    activity1Result.innerHTML = `<div class="result-box">Resultado: ${score}/${activity1.length}<div class="feedback">${unanswered ? `Te faltó responder ${unanswered} pregunta(s).` : 'Actividad completada.'}</div></div>`;
  });

  gradeActivity2.addEventListener('click', () => {
    let score = 0;
    let unanswered = 0;
    activity2.forEach((item, index) => {
      const selected = document.querySelector(`input[name="a2-${index}"]:checked`);
      if (!selected) { unanswered++; return; }
      if ((selected.value === 'true') === item.answer) score++;
    });
    activity2Result.innerHTML = `<div class="result-box">Resultado: ${score}/${activity2.length}<div class="feedback">${unanswered ? `Te faltó responder ${unanswered} enunciado(s).` : 'Actividad completada.'}</div></div>`;
  });
})();
