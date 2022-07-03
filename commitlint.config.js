/** 规则语法
 * Git 层面
 * revert: Git 记录回滚
 * merge: 代码合并
 *
 * 功能层面
 * style: 样式更新
 * feat: 新增功能
 * fixbug: Bug 修复
 * refactor: 功能重构
 * config: 项目配置
 * types: 类型声明
 * build: 构建配置
 * release: 项目版本发布
 * test: 测试用例
 *
 * 辅助层面
 * perf: 性能优化
 * lint: 代码检测
 * docs: 文档更新
 * cicd: 项目持续集成配置
 *
 */

module.exports = {
  ignores: [commit => commit.includes('init')],
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 108],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'subject-case': [0],
    'type-enum': [
      2,
      'always',
      [
        'revert',
        'merge',
        'style',
        'feat',
        'fixbug',
        'refactor',
        'config',
        'types',
        'build',
        'release',
        'test',
        'perf',
        'lint',
        'docs',
        'cicd',
      ],
    ],
  },
};
