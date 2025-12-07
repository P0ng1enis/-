// Скрипт для страницы оформления заказа

document.addEventListener('DOMContentLoaded', function() {
    const checkoutForm = document.getElementById('checkoutForm');
    const orderItems = document.getElementById('orderItems');
    const orderTotal = document.getElementById('orderTotal');
    const cardDetails = document.getElementById('cardDetails');
    
    // Проверка, есть ли товары в корзине
    if (cart.length === 0) {
        window.location.href = 'cart.html';
        return;
    }
    
    // Инициализация отображения товаров в заказе
    function renderOrderItems() {
        orderItems.innerHTML = '';
        
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            const orderItem = document.createElement('div');
            orderItem.className = 'order-item';
            orderItem.innerHTML = `
                <span>${item.name} x${item.quantity}</span>
                <span>${itemTotal.toLocaleString()} руб.</span>
            `;
            orderItems.appendChild(orderItem);
        });
        
        const totalAmount = getCartTotal();
        orderTotal.textContent = `${totalAmount.toLocaleString()} руб.`;
    }
    
    // Переключение между шагами
    function goToStep(stepId) {
        // Скрываем все шаги
        document.querySelectorAll('.form-section').forEach(section => {
            section.style.display = 'none';
        });
        
        // Показываем выбранный шаг
        document.getElementById(stepId).style.display = 'block';
        
        // Обновляем шаги оформления
        updateCheckoutSteps(stepId);
    }
    
    // Обновление отображения шагов
    function updateCheckoutSteps(currentStepId) {
        const steps = document.querySelectorAll('.checkout-step');
        const stepMap = {
            'step1': 0,
            'step2': 1,
            'step3': 2,
            'step4': 3
        };
        
        const currentStepIndex = stepMap[currentStepId];
        
        steps.forEach((step, index) => {
            step.classList.remove('active', 'completed');
            
            if (index < currentStepIndex) {
                step.classList.add('completed');
            } else if (index === currentStepIndex) {
                step.classList.add('active');
            }
        });
    }
    
    // Валидация шага
    function validateStep(stepId) {
        const stepElement = document.getElementById(stepId);
        const requiredInputs = stepElement.querySelectorAll('input[required], select[required]');
        
        for (let input of requiredInputs) {
            if (!input.value.trim()) {
                showNotification(`Пожалуйста, заполните поле: ${input.previousElementSibling?.textContent || input.name}`, 'error');
                input.focus();
                return false;
            }
            
            // Дополнительная валидация для email
            if (input.type === 'email' && !isValidEmail(input.value)) {
                showNotification('Пожалуйста, введите корректный email адрес', 'error');
                input.focus();
                return false;
            }
            
            // Дополнительная валидация для телефона
            if (input.type === 'tel' && !isValidPhone(input.value)) {
                showNotification('Пожалуйста, введите корректный номер телефона', 'error');
                input.focus();
                return false;
            }
        }
        
        return true;
    }
    
    // Проверка email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Проверка телефона
    function isValidPhone(phone) {
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
    }
    
    // Обработка оплаты картой
    function handleCardPayment() {
        const cardNumber = document.getElementById('cardNumber').value.replace(/\s/g, '');
        const cardExpiry = document.getElementById('cardExpiry').value;
        const cardName = document.getElementById('cardName').value;
        const cardCVC = document.getElementById('cardCVC').value;
        
        if (!cardNumber || cardNumber.length !== 16) {
            showNotification('Введите корректный номер карты (16 цифр)', 'error');
            return false;
        }
        
        if (!cardExpiry || !/^\d{2}\/\d{2}$/.test(cardExpiry)) {
            showNotification('Введите корректный срок действия карты (MM/YY)', 'error');
            return false;
        }
        
        if (!cardName) {
            showNotification('Введите имя на карте', 'error');
            return false;
        }
        
        if (!cardCVC || cardCVC.length !== 3) {
            showNotification('Введите корректный CVC/CVV код (3 цифры)', 'error');
            return false;
        }
        
        return true;
    }
    
    // Отправка формы
    function submitOrder(event) {
        event.preventDefault();
        
        // Проверяем согласие с условиями
        const termsCheckbox = document.getElementById('terms');
        if (!termsCheckbox.checked) {
            showNotification('Необходимо согласие с условиями обработки данных', 'error');
            return;
        }
        
        // Проверяем способ оплаты
        const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
        
        if (paymentMethod === 'card') {
            if (!handleCardPayment()) {
                return;
            }
        }
        
        // Создаем объект заказа
        const order = {
            orderId: 'ORD-' + Date.now(),
            customer: {
                fullName: document.getElementById('fullName').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                address: document.getElementById('address').value,
                city: document.getElementById('city').value,
                postalCode: document.getElementById('postalCode').value
            },
            delivery: {
                method: document.getElementById('deliveryMethod').value,
                notes: document.getElementById('deliveryNotes').value
            },
            payment: {
                method: paymentMethod,
                total: getCartTotal()
            },
            items: cart,
            orderDate: new Date().toISOString()
        };
        
        // В реальном приложении здесь был бы AJAX запрос к серверу
        console.log('Order submitted:', order);
        
        // Сохраняем заказ в localStorage (для демонстрации)
        localStorage.setItem('lastOrder', JSON.stringify(order));
        
        // Очищаем корзину
        cart.length = 0;
        localStorage.removeItem('cart');
        updateCartCount();
        
        // Показываем сообщение об успехе
        showNotification('Заказ успешно оформлен! Номер вашего заказа: ' + order.orderId, 'success');
        
        // Перенаправляем на страницу подтверждения
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 3000);
    }
    
    // Инициализация страницы оформления
    function initCheckoutPage() {
        // Отображаем товары в заказе
        renderOrderItems();
        
        // Обработка переключения шагов
        document.querySelectorAll('.next-step').forEach(button => {
            button.addEventListener('click', function() {
                const currentStep = this.closest('.form-section').id;
                const nextStep = this.getAttribute('data-next');
                
                if (validateStep(currentStep)) {
                    goToStep(nextStep);
                }
            });
        });
        
        document.querySelectorAll('.prev-step').forEach(button => {
            button.addEventListener('click', function() {
                const prevStep = this.getAttribute('data-prev');
                goToStep(prevStep);
            });
        });
        
        // Обработка выбора способа оплаты
        document.querySelectorAll('input[name="paymentMethod"]').forEach(radio => {
            radio.addEventListener('change', function() {
                if (this.value === 'card') {
                    cardDetails.style.display = 'block';
                    
                    // Делаем поля карты обязательными
                    document.getElementById('cardNumber').required = true;
                    document.getElementById('cardExpiry').required = true;
                    document.getElementById('cardName').required = true;
                    document.getElementById('cardCVC').required = true;
                } else {
                    cardDetails.style.display = 'none';
                    
                    // Делаем поля карты необязательными
                    document.getElementById('cardNumber').required = false;
                    document.getElementById('cardExpiry').required = false;
                    document.getElementById('cardName').required = false;
                    document.getElementById('cardCVC').required = false;
                }
            });
        });
        
        // Обработка отправки формы
        checkoutForm.addEventListener('submit', submitOrder);
        
        // Маска для номера карты
        const cardNumberInput = document.getElementById('cardNumber');
        if (cardNumberInput) {
            cardNumberInput.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                value = value.replace(/(\d{4})/g, '$1 ').trim();
                e.target.value = value.substring(0, 19);
            });
        }
        
        // Маска для срока действия карты
        const cardExpiryInput = document.getElementById('cardExpiry');
        if (cardExpiryInput) {
            cardExpiryInput.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length >= 2) {
                    value = value.substring(0, 2) + '/' + value.substring(2, 4);
                }
                e.target.value = value.substring(0, 5);
            });
        }
        
        // Маска для CVC
        const cardCVCInput = document.getElementById('cardCVC');
        if (cardCVCInput) {
            cardCVCInput.addEventListener('input', function(e) {
                e.target.value = e.target.value.replace(/\D/g, '').substring(0, 3);
            });
        }
        
        // Маска для телефона
        const phoneInput = document.getElementById('phone');
        if (phoneInput) {
            phoneInput.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length > 0) {
                    value = '+7 ' + value.substring(1);
                    if (value.length > 4) value = value.substring(0, 4) + ' ' + value.substring(4);
                    if (value.length > 8) value = value.substring(0, 8) + ' ' + value.substring(8);
                    if (value.length > 12) value = value.substring(0, 12) + ' ' + value.substring(12);
                }
                e.target.value = value.substring(0, 16);
            });
        }
    }
    
    // Запускаем инициализацию
    initCheckoutPage();
});