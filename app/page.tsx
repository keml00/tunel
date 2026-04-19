import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">VPN Buy & Sell</span>
          </div>
          <div className="flex gap-4">
            <Link href="#features" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
              Возможности
            </Link>
            <Link href="/pricing" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">
              Тарифы
            </Link>
            <Link href="/dashboard" className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              Войти
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Защитите своё интернет-соединение
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Личный VPN сервис для безопасного доступа к сети. Шифрование трафика, защита в публичных Wi-Fi и удалённый доступ к домашней сети.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/register" className="px-8 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-lg hover:bg-indigo-700 transition-colors">
              Начать использовать
            </Link>
            <Link href="#features" className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-lg font-semibold rounded-lg border-2 border-gray-300 dark:border-gray-600 hover:border-indigo-600 dark:hover:border-indigo-400 transition-colors">
              Узнать больше
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div id="features" className="mt-32">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Почему SecureVPN?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Надёжное шифрование
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Современный протокол WireGuard с шифрованием AES-256 для максимальной защиты ваших данных.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Высокая скорость
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Минимальная задержка и максимальная пропускная способность благодаря оптимизированной инфраструктуре.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Простая настройка
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                QR-код для мгновенной настройки на мобильных устройствах. Готовые конфигурации для всех платформ.
              </p>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mt-32">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-16">
            Сценарии использования
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                🏠 Доступ к домашней сети
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Безопасное подключение к домашним устройствам и файлам из любой точки мира.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                ☕ Защита в публичных сетях
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Шифрование трафика в кафе, аэропортах и других общественных местах.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                💼 Удалённая работа
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Безопасный доступ к корпоративным ресурсам для удалённых сотрудников.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                👨‍👩‍👧‍👦 Для всей семьи
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Защита интернет-соединения для всех членов семьи на всех устройствах.
              </p>
            </div>
          </div>
        </div>

        {/* Legal Notice */}
        <div className="mt-32 max-w-4xl mx-auto">
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
      <footer className="container mx-auto px-4 py-8 mt-32 border-t border-gray-200 dark:border-gray-700">
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p>© 2026 VPN Buy & Sell. Личный VPN сервис для безопасного интернета.</p>
          <p className="mt-2 text-sm">
            Сервис соответствует законодательству РФ и предназначен для личного использования.
          </p>
          <p className="mt-2 text-sm">
            Telegram: <a href="https://t.me/vpnbuysell_bot" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline">@vpnbuysell_bot</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
