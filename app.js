document.addEventListener("DOMContentLoaded", () => {
  const popupData = {
    definicion: {
      title: "Definición: escritura sin pensamiento",
      text: "La escritura sin pensamiento es un fenómeno ético y cognitivo derivado de la delegación de procesos de estructuración, ideación y redacción de textos a sistemas de inteligencia artificial generativa. En esta práctica, el autor humano cede la responsabilidad del razonamiento a algoritmos de probabilidad estadística. En este sentido, la IA deja de operar como apoyo y pasa a sustituir el esfuerzo intelectual de planificar y organizar una argumentación propia (UNESCO, 2023).",
      key: "No se critica el uso de IA en sí mismo, sino la sustitución acrítica del pensamiento humano."
    },
    humano: {
      title: "Escritura humana: proceso formativo y ético",
      text: "La escritura humana no es solo producción de texto: es una práctica de formación intelectual. Implica detenerse, seleccionar, interpretar, argumentar y asumir responsabilidad sobre lo dicho. Desde esta perspectiva, la escritura funciona como una forma de resistencia intelectual frente a la inmediatez digital y al consumo fragmentado (Von Der Weth, 2025).",
      key: "La escritura ayuda a construir juicio, identidad y responsabilidad moral."
    },
    eje1: {
      title: "Delegación del pensamiento y “muleta cognitiva”",
      text: "La escritura sin pensamiento implica que el individuo deja de ser el arquitecto de su propio discurso para convertirse en un usuario dependiente de esquemas y borradores automáticos. Aunque el rendimiento aparente puede mejorar, la capacidad de aprendizaje autónomo y pensamiento crítico se debilita cuando el sujeto ya no puede producir contenido sin soporte algorítmico (UNESCO, 2023).",
      key: "La herramienta se convierte en muleta cognitiva cuando reemplaza el ejercicio del pensamiento."
    },
    eje2: {
      title: "El riesgo de atrofia cognitiva",
      text: "Desde una perspectiva neurocientífica y pedagógica, la delegación sistemática de la reflexión a la máquina puede conducir a una disminución de la memoria a largo plazo y de capacidades intelectuales superiores. Al no ejercer el “escribir para pensar”, el cerebro pierde oportunidades de ir más allá del texto y consolidar circuitos vinculados con reflexión profunda y juicio personal (Bleeker, 2010; UNESCO, 2023).",
      key: "No escribir para pensar puede reducir la capacidad de pensar al escribir."
    },
    eje3: {
      title: "Pérdida de la densidad moral e identidad",
      text: "La escritura es un acto de construcción de identidad que requiere pausa y dedicación. Cuando la producción de lenguaje se reduce a un proceso mecánico de clic y ensamblaje de datos, se corre el riesgo de perder la densidad moral y cultural del juicio humano, favoreciendo la homogeneización del conocimiento y marginando voces propias (UNESCO, 2023; Von Der Weth, 2025).",
      key: "La automatización acrítica puede erosionar la voz propia y el juicio moral."
    },
    eje4: {
      title: "Transformación de autor a “decodificador”",
      text: "En este escenario, el autor puede transformarse en un simple decodificador de información: alguien que confunde el acceso ilimitado a datos procesados por IA con conocimiento real. Los textos generados pueden parecer fluidos y autoritarios, pero contener sesgos o inexactitudes que el usuario no detecta si ha renunciado al proceso reflexivo (Bleeker, 2010; Nieman Foundation for Journalism at Harvard, 2023; UNESCO, 2023).",
      key: "Tener información no equivale a comprenderla críticamente."
    },
    rec1: {
      title: "Desarrollar Literacidades Digitales Críticas",
      text: "Las instituciones deben formar a estudiantes y docentes no solo en el uso técnico de la IA, sino en la capacidad de interrogar sus sesgos, su diseño material y sus implicaciones ideológicas. Esto supone comprender la IA como una tecnología situada, no como una fuente neutral de verdad (Darvin, 2025; Ilomäki et al., 2023).",
      key: "Usar tecnología con criterio exige saber cuestionar sus condiciones de producción."
    },
    rec2: {
      title: "Privilegiar el “porqué” sobre el “qué”",
      text: "En la escritura profesional y académica, la IA puede apoyar tareas rutinarias o recopilación de datos, pero el análisis crítico, la interpretación de significados y la toma de postura deben permanecer en el juicio humano. De este modo, la eficiencia técnica no reemplaza el proceso ético e intelectual de comprender (Nieman Foundation for Journalism at Harvard, 2023).",
      key: "El producto final no debe desplazar el proceso formativo del pensamiento."
    },
    rec3: {
      title: "Fomentar el “Slow Learning”",
      text: "Es necesario reivindicar espacios para lectura y escritura profunda, lineal y pausada. Estos tiempos permiten desarrollar imaginación moral, autonomía intelectual y resistencia frente a la inmediatez algorítmica. La pausa no es atraso: es condición para interpretar y juzgar con mayor profundidad (Bleeker, 2010; Von Der Weth, 2025).",
      key: "Aprender lentamente no significa aprender menos; significa comprender mejor."
    },
    rec4: {
      title: "Transparencia y supervisión experta",
      text: "Todo uso de herramientas de generación de texto debe declararse de forma ética, reconociendo la co-creación con IA. Además, se requiere supervisión humana experta para corregir alucinaciones, sesgos, errores o inexactitudes del sistema antes de asumir el resultado como válido (Darvin, 2025; Nieman Foundation for Journalism at Harvard, 2023; UNESCO, 2023).",
      key: "La responsabilidad final del texto no pertenece a la IA, sino al ser humano que la usa."
    },
    conclusiones: {
      title: "Conclusiones",
      list: [
        "La IA debe ser un socio de diálogo y no un sustituto del proceso de pensamiento; la responsabilidad final y la validación ética deben recaer exclusivamente en el ser humano (UNESCO, 2023; Von Der Weth, 2025).",
        "La escritura es una herramienta de resistencia intelectual; renunciar a ella en favor de la automatización es renunciar a la capacidad de discernir entre la manipulación y el juicio informado (Von Der Weth, 2025)."
      ]
    }
  };

  const activity1 = [
    {
      question: "1. ¿Qué define mejor la escritura sin pensamiento?",
      options: [
        "Una forma de lectura lenta y profunda.",
        "La delegación de estructuración, ideación y redacción a sistemas de IA generativa sin asumir plenamente el razonamiento.",
        "Una escritura manual sin apoyo tecnológico.",
        "Una estrategia para eliminar cualquier herramienta digital."
      ],
      answer: 1
    },
    {
      question: "2. ¿Qué significa que la IA funcione como muleta cognitiva?",
      options: [
        "Que fortalece automáticamente todas las capacidades intelectuales.",
        "Que reemplaza el ejercicio del pensamiento hasta generar dependencia.",
        "Que solo sirve para corregir ortografía.",
        "Que impide cualquier forma de aprendizaje."
      ],
      answer: 1
    },
    {
      question: "3. ¿Cuál es el riesgo de atrofia cognitiva?",
      options: [
        "Aumentar la memoria a largo plazo.",
        "Perder oportunidades de consolidar reflexión profunda y juicio personal.",
        "Leer demasiado lentamente.",
        "Mejorar siempre la autonomía intelectual."
      ],
      answer: 1
    },
    {
      question: "4. ¿Qué implica pasar de autor a decodificador?",
      options: [
        "Construir argumentos propios desde cero.",
        "Confundir acceso a información procesada con conocimiento real.",
        "Rechazar toda herramienta de apoyo.",
        "Escribir con mayor densidad moral."
      ],
      answer: 1
    },
    {
      question: "5. ¿Cuál recomendación se relaciona con cuestionar sesgos y diseño de la IA?",
      options: [
        "Usar la IA como sustituto total.",
        "Privilegiar solo el producto final.",
        "Desarrollar literacidades digitales críticas.",
        "No declarar nunca el uso de IA."
      ],
      answer: 2
    }
  ];

  const activity2 = [
    {
      statement: "1. La escritura sin pensamiento prioriza el producto final, el “qué”, sobre el proceso formativo y ético, el “porqué”.",
      answer: true
    },
    {
      statement: "2. La IA debe sustituir por completo el proceso de pensamiento humano.",
      answer: false
    },
    {
      statement: "3. La pérdida de densidad moral e identidad puede surgir cuando el lenguaje se reduce a ensamblaje mecánico de datos.",
      answer: true
    },
    {
      statement: "4. El slow learning propone eliminar la lectura y escritura pausada.",
      answer: false
    },
    {
      statement: "5. La transparencia en la co-creación implica declarar éticamente el uso de herramientas de generación de texto.",
      answer: true
    }
  ];

  const infoModal = document.getElementById("infoModal");
  const modalContent = document.getElementById("modalContent");
  const closeInfo = document.getElementById("closeInfo");

  const activity1Modal = document.getElementById("activity1Modal");
  const activity2Modal = document.getElementById("activity2Modal");
  const closeActivity1 = document.getElementById("closeActivity1");
  const closeActivity2 = document.getElementById("closeActivity2");

  const openActivity1 = document.getElementById("openActivity1");
  const openActivity2 = document.getElementById("openActivity2");
  const activity1Form = document.getElementById("activity1Form");
  const activity2Form = document.getElementById("activity2Form");
  const gradeActivity1 = document.getElementById("gradeActivity1");
  const gradeActivity2 = document.getElementById("gradeActivity2");
  const activity1Result = document.getElementById("activity1Result");
  const activity2Result = document.getElementById("activity2Result");

  function openModal(modal) {
    modal.classList.remove("hidden");
  }

  function closeModal(modal) {
    modal.classList.add("hidden");
  }

  document.querySelectorAll("[data-popup]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = popupData[button.dataset.popup];
      if (!item) return;

      if (item.list) {
        modalContent.innerHTML = `
          <h2 class="popup-title" id="modalTitle">${item.title}</h2>
          <ul class="popup-list">
            ${item.list.map(point => `<li>${point}</li>`).join("")}
          </ul>
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

  closeInfo.addEventListener("click", () => closeModal(infoModal));
  closeActivity1.addEventListener("click", () => closeModal(activity1Modal));
  closeActivity2.addEventListener("click", () => closeModal(activity2Modal));

  [infoModal, activity1Modal, activity2Modal].forEach((modal) => {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) closeModal(modal);
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal(infoModal);
      closeModal(activity1Modal);
      closeModal(activity2Modal);
    }
  });

  function renderActivity1() {
    activity1Result.innerHTML = "";
    activity1Form.innerHTML = activity1.map((item, index) => {
      const options = item.options.map((option, optionIndex) => `
        <label class="option">
          <input type="radio" name="a1-${index}" value="${optionIndex}">
          ${option}
        </label>
      `).join("");

      return `
        <section class="question">
          <h3>${item.question}</h3>
          ${options}
        </section>
      `;
    }).join("");
  }

  function renderActivity2() {
    activity2Result.innerHTML = "";
    activity2Form.innerHTML = activity2.map((item, index) => `
      <section class="question">
        <h3>${item.statement}</h3>
        <label class="option">
          <input type="radio" name="a2-${index}" value="true">
          Verdadero
        </label>
        <label class="option">
          <input type="radio" name="a2-${index}" value="false">
          Falso
        </label>
      </section>
    `).join("");
  }

  openActivity1.addEventListener("click", () => {
    renderActivity1();
    openModal(activity1Modal);
  });

  openActivity2.addEventListener("click", () => {
    renderActivity2();
    openModal(activity2Modal);
  });

  gradeActivity1.addEventListener("click", () => {
    let score = 0;
    let feedback = "";

    activity1.forEach((item, index) => {
      const selected = document.querySelector(`input[name="a1-${index}"]:checked`);

      if (selected && Number(selected.value) === item.answer) {
        score++;
        feedback += `<li class="good">Pregunta ${index + 1}: correcta.</li>`;
      } else {
        feedback += `<li class="bad">Pregunta ${index + 1}: incorrecta.</li>`;
      }
    });

    const percentage = Math.round((score / activity1.length) * 100);

    activity1Result.innerHTML = `
      <div class="result-box">
        <h3>Resultado</h3>
        <p><strong>Puntaje:</strong> ${score} de ${activity1.length}</p>
        <p><strong>Calificación:</strong> ${percentage}%</p>
        <ul class="feedback">${feedback}</ul>
        <button class="close-result-btn" id="closeResult1" type="button">Cerrar actividad</button>
      </div>
    `;

    document.getElementById("closeResult1").addEventListener("click", () => {
      closeModal(activity1Modal);
    });
  });

  gradeActivity2.addEventListener("click", () => {
    let score = 0;
    let feedback = "";

    activity2.forEach((item, index) => {
      const selected = document.querySelector(`input[name="a2-${index}"]:checked`);

      if (selected && selected.value === String(item.answer)) {
        score++;
        feedback += `<li class="good">Pregunta ${index + 1}: correcta.</li>`;
      } else {
        feedback += `<li class="bad">Pregunta ${index + 1}: incorrecta.</li>`;
      }
    });

    const percentage = Math.round((score / activity2.length) * 100);

    activity2Result.innerHTML = `
      <div class="result-box">
        <h3>Resultado</h3>
        <p><strong>Puntaje:</strong> ${score} de ${activity2.length}</p>
        <p><strong>Calificación:</strong> ${percentage}%</p>
        <ul class="feedback">${feedback}</ul>
        <button class="close-result-btn" id="closeResult2" type="button">Cerrar actividad</button>
      </div>
    `;

    document.getElementById("closeResult2").addEventListener("click", () => {
      closeModal(activity2Modal);
    });
  });
});
