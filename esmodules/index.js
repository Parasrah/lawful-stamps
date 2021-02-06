const module = 'lawful-stamps'

const defaultIcons = CONFIG.JournalEntry.noteIcons

function propagate(json) {
  if (json) {
    const js = JSON.parse(value)
    CONFIG.JournalEntry.noteIcons = js
  } else {
    CONFIG.JournalEntry.noteIcons = defaultIcons
  }
}

Hooks.on('init', () => {
  game.settings.register(module, 'override', {
    name: 'Icon Overrides',
    hint: 'Override the default icons for map notes',
    scope: 'world',
    config: false,
    type: String,
    default: '',
    onChange: propagate,
  })
})

Hooks.on('ready', () => {
  const iconOverride = game.settings.get(module, 'override')
  propagate(iconOverride)
})
