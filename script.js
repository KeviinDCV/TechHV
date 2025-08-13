// Script para validaciones y funcionalidades interactivas
// Hoja de vida de Kevin David Chavarro Erazo

document.addEventListener('DOMContentLoaded', function() {
    // Elementos del formulario
    const form = document.querySelector('form');
    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const telefonoInput = document.getElementById('telefono');
    const edadInput = document.getElementById('edad');
    const empresaInput = document.getElementById('empresa');
    const cargoInput = document.getElementById('cargo');
    const experienciaInput = document.getElementById('experiencia');
    const sitioWebInput = document.getElementById('sitio-web');
    const tipoProyectoInput = document.getElementById('tipo-proyecto');
    const presupuestoInput = document.getElementById('presupuesto');
    const fechaInicioInput = document.getElementById('fecha-inicio');
    const mensajeTextarea = document.getElementById('mensaje');
    const horarioContactoInput = document.getElementById('horario-contacto');
    const codigoReferenciaInput = document.getElementById('codigo-referencia');

    // Función para mostrar mensajes de error
    function mostrarError(elemento, mensaje) {
        // Remover mensaje de error anterior si existe
        const errorAnterior = elemento.parentNode.querySelector('.error-message');
        if (errorAnterior) {
            errorAnterior.remove();
        }

        // Crear nuevo mensaje de error
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = mensaje;
        errorDiv.style.color = '#e74c3c';
        errorDiv.style.fontSize = '14px';
        errorDiv.style.marginTop = '5px';
        
        elemento.parentNode.insertBefore(errorDiv, elemento.nextSibling);
        elemento.style.borderColor = '#e74c3c';
    }

    // Función para limpiar errores
    function limpiarError(elemento) {
        const errorMessage = elemento.parentNode.querySelector('.error-message');
        if (errorMessage) {
            errorMessage.remove();
        }
        elemento.style.borderColor = '#95a5a6';
    }

    // Validación de nombre
    function validarNombre() {
        const nombre = nombreInput.value.trim();
        if (nombre.length < 2) {
            mostrarError(nombreInput, 'El nombre debe tener al menos 2 caracteres');
            return false;
        }
        if (nombre.length > 50) {
            mostrarError(nombreInput, 'El nombre no puede exceder 50 caracteres');
            return false;
        }
        if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
            mostrarError(nombreInput, 'El nombre solo puede contener letras y espacios');
            return false;
        }
        limpiarError(nombreInput);
        return true;
    }

    // Validación de email
    function validarEmail() {
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            mostrarError(emailInput, 'Por favor ingresa un email válido');
            return false;
        }
        limpiarError(emailInput);
        return true;
    }

    // Validación de teléfono
    function validarTelefono() {
        const telefono = telefonoInput.value.trim();
        if (telefono && !/^[0-9]{10}$/.test(telefono)) {
            mostrarError(telefonoInput, 'El teléfono debe tener exactamente 10 dígitos');
            return false;
        }
        limpiarError(telefonoInput);
        return true;
    }

    // Validación de edad
    function validarEdad() {
        const edad = parseInt(edadInput.value);
        if (edadInput.value && (edad < 18 || edad > 65)) {
            mostrarError(edadInput, 'La edad debe estar entre 18 y 65 años');
            return false;
        }
        limpiarError(edadInput);
        return true;
    }

    // Validación de sitio web
    function validarSitioWeb() {
        const sitioWeb = sitioWebInput.value.trim();
        if (sitioWeb && !/^https?:\/\/.+\..+/.test(sitioWeb)) {
            mostrarError(sitioWebInput, 'Por favor ingresa una URL válida (http:// o https://)');
            return false;
        }
        limpiarError(sitioWebInput);
        return true;
    }

    // Validación de tipo de proyecto
    function validarTipoProyecto() {
        const tipoProyecto = tipoProyectoInput.value.trim();
        if (tipoProyecto.length < 5) {
            mostrarError(tipoProyectoInput, 'Describe el tipo de proyecto con al menos 5 caracteres');
            return false;
        }
        if (tipoProyecto.length > 100) {
            mostrarError(tipoProyectoInput, 'La descripción no puede exceder 100 caracteres');
            return false;
        }
        limpiarError(tipoProyectoInput);
        return true;
    }

    // Validación de presupuesto
    function validarPresupuesto() {
        const presupuesto = presupuestoInput.value.trim();
        if (presupuesto && !/^[0-9,.]+$/.test(presupuesto)) {
            mostrarError(presupuestoInput, 'El presupuesto solo puede contener números, comas y puntos');
            return false;
        }
        limpiarError(presupuestoInput);
        return true;
    }

    // Validación de fecha de inicio
    function validarFechaInicio() {
        const fechaInicio = new Date(fechaInicioInput.value);
        const hoy = new Date();
        hoy.setHours(0, 0, 0, 0);
        
        if (fechaInicioInput.value && fechaInicio < hoy) {
            mostrarError(fechaInicioInput, 'La fecha de inicio no puede ser anterior a hoy');
            return false;
        }
        limpiarError(fechaInicioInput);
        return true;
    }

    // Validación de mensaje
    function validarMensaje() {
        const mensaje = mensajeTextarea.value.trim();
        if (mensaje.length < 10) {
            mostrarError(mensajeTextarea, 'El mensaje debe tener al menos 10 caracteres');
            return false;
        }
        if (mensaje.length > 500) {
            mostrarError(mensajeTextarea, 'El mensaje no puede exceder 500 caracteres');
            return false;
        }
        limpiarError(mensajeTextarea);
        return true;
    }

    // Validación de código de referencia
    function validarCodigoReferencia() {
        const codigo = codigoReferenciaInput.value.trim();
        if (codigo && !/^[A-Z]{2}[0-9]{4}$/.test(codigo)) {
            mostrarError(codigoReferenciaInput, 'El código debe tener formato: 2 letras mayúsculas + 4 números (ej: AB1234)');
            return false;
        }
        limpiarError(codigoReferenciaInput);
        return true;
    }

    // Event listeners para validación en tiempo real
    nombreInput.addEventListener('blur', validarNombre);
    emailInput.addEventListener('blur', validarEmail);
    telefonoInput.addEventListener('blur', validarTelefono);
    edadInput.addEventListener('blur', validarEdad);
    sitioWebInput.addEventListener('blur', validarSitioWeb);
    tipoProyectoInput.addEventListener('blur', validarTipoProyecto);
    presupuestoInput.addEventListener('blur', validarPresupuesto);
    fechaInicioInput.addEventListener('blur', validarFechaInicio);
    mensajeTextarea.addEventListener('blur', validarMensaje);
    codigoReferenciaInput.addEventListener('blur', validarCodigoReferencia);

    // Validación completa del formulario al enviar
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Ejecutar todas las validaciones
        const validaciones = [
            validarNombre(),
            validarEmail(),
            validarTelefono(),
            validarEdad(),
            validarSitioWeb(),
            validarTipoProyecto(),
            validarPresupuesto(),
            validarFechaInicio(),
            validarMensaje(),
            validarCodigoReferencia()
        ];

        // Verificar si todas las validaciones pasaron
        const formularioValido = validaciones.every(validacion => validacion);

        if (formularioValido) {
            // Mostrar mensaje de éxito
            mostrarMensajeExito();
        } else {
            // Mostrar mensaje de error general
            mostrarMensajeError();
        }
    });

    // Función para mostrar mensaje de éxito
    function mostrarMensajeExito() {
        const mensaje = document.createElement('div');
        mensaje.className = 'mensaje-exito';
        mensaje.innerHTML = `
            <h3>¡Formulario enviado exitosamente!</h3>
            <p>Gracias por tu interés. Te contactaré pronto.</p>
        `;
        mensaje.style.cssText = `
            background-color: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
            border-radius: 4px;
            padding: 20px;
            margin: 20px 0;
            text-align: center;
        `;
        
        form.parentNode.insertBefore(mensaje, form);
        
        // Remover mensaje después de 5 segundos
        setTimeout(() => {
            mensaje.remove();
        }, 5000);
        
        // Limpiar formulario
        form.reset();
    }

    // Función para mostrar mensaje de error general
    function mostrarMensajeError() {
        const mensaje = document.createElement('div');
        mensaje.className = 'mensaje-error';
        mensaje.innerHTML = `
            <h3>Error en el formulario</h3>
            <p>Por favor corrige los errores marcados antes de enviar.</p>
        `;
        mensaje.style.cssText = `
            background-color: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
            border-radius: 4px;
            padding: 20px;
            margin: 20px 0;
            text-align: center;
        `;
        
        form.parentNode.insertBefore(mensaje, form);
        
        // Remover mensaje después de 5 segundos
        setTimeout(() => {
            mensaje.remove();
        }, 5000);
    }

    // ===== FUNCIONALIDADES ADICIONALES DE INTERACTIVIDAD =====

    // Smooth scroll para los enlaces de navegación
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Agregar efecto visual al enlace clickeado
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Efecto de typing para el título principal
    function efectoTyping() {
        const titulo = document.querySelector('.profile-info h1');
        if (titulo) {
            const textoOriginal = titulo.textContent;
            titulo.textContent = '';
            let i = 0;

            function escribir() {
                if (i < textoOriginal.length) {
                    titulo.textContent += textoOriginal.charAt(i);
                    i++;
                    setTimeout(escribir, 100);
                }
            }

            // Iniciar el efecto después de un pequeño delay
            setTimeout(escribir, 500);
        }
    }

    // Contador animado para años de experiencia
    function animarContadores() {
        const celdas = document.querySelectorAll('#habilidades td:last-child');
        celdas.forEach(celda => {
            const texto = celda.textContent;
            const numero = parseInt(texto);
            if (!isNaN(numero)) {
                celda.textContent = '0 años';
                let contador = 0;
                const intervalo = setInterval(() => {
                    contador++;
                    celda.textContent = `${contador} año${contador !== 1 ? 's' : ''}`;
                    if (contador >= numero) {
                        clearInterval(intervalo);
                    }
                }, 200);
            }
        });
    }

    // Efecto de aparición gradual para las secciones
    function efectoAparicion() {
        const secciones = document.querySelectorAll('section');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1
        });

        secciones.forEach(seccion => {
            seccion.style.opacity = '0';
            seccion.style.transform = 'translateY(20px)';
            seccion.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(seccion);
        });
    }

    // Efecto hover dinámico para las filas de la tabla de horario
    function efectosTablaHorario() {
        const filasHorario = document.querySelectorAll('#horario-semanal tbody tr');
        filasHorario.forEach(fila => {
            fila.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.02)';
                this.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
                this.style.transition = 'all 0.3s ease';
            });

            fila.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = 'none';
            });
        });
    }

    // Botón "Volver arriba" dinámico
    function crearBotonVolverArriba() {
        const boton = document.createElement('button');
        boton.innerHTML = '↑';
        boton.className = 'boton-volver-arriba';
        boton.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: #2c3e50;
            color: white;
            border: none;
            font-size: 20px;
            cursor: pointer;
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: center;
        `;

        document.body.appendChild(boton);

        // Mostrar/ocultar botón según scroll
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                boton.style.opacity = '1';
            } else {
                boton.style.opacity = '0';
            }
        });

        // Funcionalidad del botón
        boton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // Efecto hover
        boton.addEventListener('mouseenter', () => {
            boton.style.backgroundColor = '#34495e';
            boton.style.transform = 'scale(1.1)';
        });

        boton.addEventListener('mouseleave', () => {
            boton.style.backgroundColor = '#2c3e50';
            boton.style.transform = 'scale(1)';
        });
    }

    // Efecto de progreso de lectura
    function crearBarraProgreso() {
        const barra = document.createElement('div');
        barra.className = 'barra-progreso';
        barra.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background-color: #e74c3c;
            z-index: 1001;
            transition: width 0.3s ease;
        `;

        document.body.appendChild(barra);

        window.addEventListener('scroll', () => {
            const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
            const scrollActual = window.pageYOffset;
            const porcentaje = (scrollActual / scrollTotal) * 100;
            barra.style.width = porcentaje + '%';
        });
    }

    // Inicializar todas las funcionalidades
    efectoTyping();
    setTimeout(animarContadores, 1000);
    efectoAparicion();
    efectosTablaHorario();
    crearBotonVolverArriba();
    crearBarraProgreso();


});
