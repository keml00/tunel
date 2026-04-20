import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // TODO: Получить всех пользователей из базы данных
    // Пока возвращаем демо-данные
    const users = [
      {
        id: 'user1',
        telegram_id: 232400016,
        username: 'keml00',
        first_name: 'Камиль',
        subscription_status: 'active',
        expires_at: '2026-05-20',
        devices: ['iPhone', 'MacBook'],
        created_at: '2026-04-01T10:00:00Z',
      },
      {
        id: 'user2',
        telegram_id: 123456789,
        username: 'demo_user',
        first_name: 'Demo',
        subscription_status: 'trial',
        expires_at: '2026-04-25',
        devices: ['Android'],
        created_at: '2026-04-15T12:00:00Z',
      },
    ];

    return NextResponse.json({
      success: true,
      users,
      count: users.length
    });
  } catch (error) {
    console.error('Get all users error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
