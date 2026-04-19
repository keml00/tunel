"use client";

import Link from "next/link";
import { useState } from "react";

const plans = [
  {
    id: "basic",
    name: "Базовый",
    price: 300,
    period: "мес",
    features: [
      "100 GB трафика",
      "3 устройства",
      "Поддержка 24/7",
      "WireGuard протокол",
      "Базовая скорость"
    ],
    popular: false
  },
  {
    id: "premium",
    name: "Премиум",
    price: 500,
    period: "мес",
    features: [
      "Безлимитный трафик",
      "5 устройств",
      "Приоритетная поддержка",
      "WireGuard протокол",
      "Максимальная скорость",
      "Приоритет в очереди"
    ],
    popular: true
  },
  {
    id: "family",
    name: "Семейный",
    price: 800,
    period: "мес",
    features: [
      "Безлимитный трафик",
      "10 устройств",
      "Приоритетная поддержка",
      "WireGuard протокол",
      "Максимальная скорость",
      "Семейный доступ",
      "Общая статистика"
    ],
    popular: false
  }
];

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId);
    // TODO: Интеграция с платежной системой
    alert(`Выбран тариф: ${plans.find(p => p.id === planId)?.name}\n\nИнтеграция с платежной системой будет добавлена.`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">SecureVPN</span>
          </Link>
          <div className="flex gap-4">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
              Главная
            </Link>
            <Link href="/dashboard" className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Войти
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Выберите свой тариф
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Безопасный VPN для вас и вашей семьи
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 ${
                plan.popular ? 'ring-4 ring-indigo-600 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Популярный
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold text-gray-900 dark:text-white">
                    {plan.price}₽
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleSelectPlan(plan.id)}
                className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                Выбрать тариф
              </button>
            </div>
          ))}
        </div>

        {/* Payment Methods */}
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Способы оплаты
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-3">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-900 dark:text-white">Банковская карта</span>
            </div>

            <div className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-3">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-900 dark:text-white">ЮKassa</span>
            </div>

            <div className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-3">
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-900 dark:text-white">СБП</span>
            </div>

            <div className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mb-3">
                <svg className="w-8 h-8 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-900 dark:text-white">Telegram Bot</span>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Часто задаваемые вопросы
          </h2>
          <div className="space-y-4">
            <details className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer">
                Можно ли отменить подписку?
              </summary>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Да, вы можете отменить подписку в любой момент через панель управления. Доступ сохранится до конца оплаченного периода.
              </p>
            </details>

            <details className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer">
                Есть ли пробный период?
              </summary>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Да, при регистрации вы получаете 7 дней бесплатного доступа с ограничением 10 GB трафика.
              </p>
            </details>

            <details className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer">
                Можно ли сменить тариф?
              </summary>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Да, вы можете повысить или понизить тариф в любой момент. При повышении разница будет пересчитана пропорционально.
              </p>
            </details>

            <details className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <summary className="font-semibold text-gray-900 dark:text-white cursor-pointer">
                Безопасно ли использовать VPN?
              </summary>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Да, мы используем современный протокол WireGuard с шифрованием AES-256. Сервис соответствует законодательству РФ и предназначен для защиты вашего соединения.
              </p>
            </details>
          </div>
        </div>

        {/* Legal Notice */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-2 border-yellow-200 dark:border-yellow-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
              <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              Важная информация
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Данный сервис предназначен для личного использования и защиты вашего интернет-соединения.
              Сервис не предназначен для обхода блокировок и соответствует законодательству РФ.
              Все подключения логируются в соответствии с требованиями закона.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-12 border-t border-gray-200 dark:border-gray-700">
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p>© 2026 SecureVPN. Личный VPN сервис для безопасного интернета.</p>
        </div>
      </footer>
    </div>
  );
}
