const module = 'lawful-stamps'

const defaultIcons = CONFIG.JournalEntry.noteIcons

function maybePropagate(json) {
  if (json) {
    const js = JSON.parse(value)
    CONFIG.JournalEntry.noteIcons = js
  }
}

game.settings.register(module, 'override', {
  name: 'Icon Overrides',
  hint: 'Override the default icons for map notes',
  scope: 'world',
  config: false,
  type: String,
  default: '',
  onChange: maybePropagate,
})

Hooks.on('ready', () => {
  const iconOverride = game.settings.get(module, 'override')
  maybePropagate(iconOverride)
})
