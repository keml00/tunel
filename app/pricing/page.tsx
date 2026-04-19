"use client";

import Link from "next/link";
import { useState } from "react";

const plans = [
  {
    id: "1month",
    name: "1 месяц",
    price: 200,
    period: "мес",
    features: [
      "Безлимитный трафик",
      "До 5 устройств",
      "Поддержка 24/7",
      "WireGuard протокол",
      "Высокая скорость"
    ],
    popular: false
  },
  {
    id: "3months",
    name: "3 месяца",
    price: 550,
    period: "3 мес",
    pricePerMonth: 183,
    features: [
      "Безлимитный трафик",
      "До 5 устройств",
      "Поддержка 24/7",
      "WireGuard протокол",
      "Высокая скорость",
      "Экономия 50₽"
    ],
    popular: true
  },
  {
    id: "6months",
    name: "6 месяцев",
    price: 1000,
    period: "6 мес",
    pricePerMonth: 167,
    features: [
      "Безлимитный трафик",
      "До 5 устройств",
      "Поддержка 24/7",
      "WireGuard протокол",
      "Высокая скорость",
      "Экономия 200₽"
    ],
    popular: false
  },
  {
    id: "12months",
    name: "12 месяцев",
    price: 1800,
    period: "12 мес",
    pricePerMonth: 150,
    features: [
      "Безлимитный трафик",
      "До 5 устройств",
      "Поддержка 24/7",
      "WireGuard протокол",
      "Высокая скорость",
      "Экономия 600₽",
      "Лучшая цена!"
    ],
    popular: false
  }
];

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId);
    const plan = plans.find(p => p.id === planId);
    // Открываем Telegram бота для оплаты
    window.open('https://t.me/vpnbuysell_bot?start=' + planId, '_blank');
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
            <span className="text-2xl font-bold text-gray-900 dark:text-white">VPN Buy & Sell</span>
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
            Способ оплаты
          </h2>
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl border-2 border-indigo-200 dark:border-indigo-800 max-w-md w-full">
              <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Telegram Bot
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-300 mb-4">
                Оплата через личные сообщения в боте @vpnbuysell_bot
              </p>
              <a
                href="https://t.me/vpnbuysell_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                </svg>
                Открыть бота
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-500 dark:text-gray-400 text-center max-w-md">
              После выбора тарифа вы будете перенаправлены в Telegram бот для завершения оплаты.
              Бот поддерживает оплату картой, СБП и другие способы.
            </p>
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
          <p>© 2026 VPN Buy & Sell. Личный VPN сервис для безопасного интернета.</p>
          <p className="mt-2 text-sm">
            Telegram: <a href="https://t.me/vpnbuysell_bot" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">@vpnbuysell_bot</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
