module.exports = {
  disableEmoji: false,
  format: '{type}{scope}: {emoji}{subject}',
  list: [
    'chore',
    'ci',
    'docs',
    'feat',
    'fix',
    'perf',
    'refactor',
    'release',
    'style',
    'test',
  ],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: [
    'type',
    'scope',
    'subject',
    'body',
    'breaking',
    'issues',
    'lerna',
  ],
  scopes: [],
  types: {
    chore: {
      description: 'ビルド関連や補助ツールの変更',
      emoji: '🤖',
      value: 'chore',
    },
    ci: {
      description: 'CI関連の変更',
      emoji: '🎡',
      value: 'ci',
    },
    docs: {
      description: 'ドキュメントの更新',
      emoji: '✏',
      value: 'docs',
    },
    feat: {
      description: '機能の追加、変更、削除）',
      emoji: '✨',
      value: 'feat',
    },
    fix: {
      description: 'バグ修正',
      emoji: '🐞',
      value: 'fix',
    },
    perf: {
      description: 'パフォーマンス改善',
      emoji: '⚡️',
      value: 'perf',
    },
    refactor: {
      description: 'リファクタリング',
      emoji: '🔨',
      value: 'refactor',
    },
    release: {
      description: 'リリース、公開',
      emoji: '🏹',
      value: 'release',
    },
    style: {
      description:
        'コードのスタイル調整（マークアップ、フォーマット、セミコロン、etc）',
      emoji: '👙',
      value: 'style',
    },
    test: {
      description: 'テストコードの変更',
      emoji: '🧪',
      value: 'test',
    },
  },
};
