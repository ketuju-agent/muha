module.exports = {
  // Custom formatter for commit types
  formatCommitType: (type) => {
    const types = {
      feat: '✨ Features',
      fix: '🐛 Bug Fixes',
      docs: '📝 Documentation',
      style: '💄 Styling',
      refactor: '♻️ Code Refactoring',
      perf: '⚡️ Performance Improvements',
      test: '✅ Tests',
      chore: '🔧 Chores',
      ci: '👷 CI',
      revert: '⏪ Reverts'
    };
    return types[type] || type;
  },

  // Custom grouping of commit types
  groupCommits: (commits) => {
    const groups = {
      '✨ Features': [],
      '🐛 Bug Fixes': [],
      '📝 Documentation': [],
      '♻️ Code Refactoring': [],
      '⚡️ Performance Improvements': [],
      '🔧 Maintenance': [], // Combines chores, style, and CI
      '⏪ Reverts': []
    };

    commits.forEach(commit => {
      switch (commit.type) {
        case 'feat':
          groups['✨ Features'].push(commit);
          break;
        case 'fix':
          groups['🐛 Bug Fixes'].push(commit);
          break;
        case 'docs':
          groups['📝 Documentation'].push(commit);
          break;
        case 'refactor':
          groups['♻️ Code Refactoring'].push(commit);
          break;
        case 'perf':
          groups['⚡️ Performance Improvements'].push(commit);
          break;
        case 'revert':
          groups['⏪ Reverts'].push(commit);
          break;
        case 'chore':
        case 'style':
        case 'ci':
          groups['🔧 Maintenance'].push(commit);
          break;
      }
    });

    // Remove empty groups
    Object.keys(groups).forEach(key => {
      if (groups[key].length === 0) {
        delete groups[key];
      }
    });

    return groups;
  },

  // Custom formatter for commit messages
  formatCommitMessage: (commit) => {
    let message = '';

    // Add scope if present
    if (commit.scope) {
      message += `**${commit.scope}**: `;
    }

    // Add commit message
    message += commit.subject;

    // Add ticket number if present
    if (commit.ticket) {
      message += ` (${commit.ticket})`;
    }

    // Add breaking change indicator
    if (commit.breaking) {
      message = `💥 BREAKING CHANGE: ${message}`;
    }

    return message;
  }
}; 