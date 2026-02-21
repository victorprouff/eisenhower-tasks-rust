const translations = {
  fr: {
    // Titlebar
    btn_settings_title: 'Paramètres',
    btn_clear_title: 'Supprimer toutes les tâches',
    btn_theme_title: 'Changer de thème',
    update_banner: 'Mise à jour disponible',

    // Sidebar gauche
    new_task: 'Nouvelle tâche',
    task_placeholder: 'Entrez une tâche...',
    btn_add: 'Ajouter',
    btn_import: 'Importer une liste',
    unassigned_tasks: 'Tâches non assignées',

    // États vides
    empty_unassigned: 'Aucune tâche en attente',
    empty_quadrant: 'Glissez une tâche ici',
    empty_priority: 'Aucune tâche',

    // Sidebar droite
    priority_list: 'Liste priorisée',
    btn_export: 'Exporter',

    // Quadrant labels (fixes)
    q1_label: 'Urgent & Important',
    q2_label: 'Important & Non urgent',
    q3_label: 'Urgent & Non important',
    q4_label: 'Non urgent & Non important',

    // Noms par défaut des quadrants (réinitialisables)
    q1_default: 'Faire immédiatement',
    q2_default: 'Planifier',
    q3_default: 'Déléguer - Annuler si pas le temps',
    q4_default: 'À piocher si on en a envie et le temps',

    // Priorité droite
    priority_q1: 'Faire maintenant',
    priority_q2: 'Planifier',
    priority_q3: 'Déléguer',
    priority_q4: 'À piocher',

    // File drop overlay
    file_drop_label: 'Déposer le fichier ici',

    // Modale suppression
    confirm_delete_all: 'Êtes-vous sûr de vouloir supprimer toutes les tâches ?',
    btn_cancel: 'Annuler',
    btn_delete: 'Supprimer',

    // Modale mise à jour
    update_available: 'Mise à jour disponible',
    update_later: 'Plus tard',
    update_install: 'Installer',
    update_downloading: 'Téléchargement en cours…',
    update_downloading_pct: (pct) => `Téléchargement… ${pct}%`,
    update_downloading_kb: (kb) => `Téléchargement… ${kb} Ko`,
    update_installing: 'Installation en cours…',
    update_error: 'Erreur : ',

    // Modale export
    export_title: 'Exporter la liste',
    btn_export_cancel: 'Annuler',
    btn_export_clipboard: 'Copier dans le presse-papier',
    btn_export_download: 'Télécharger .md',
    export_unsorted: 'Non trié',
    export_q1: 'Faire immédiatement',
    export_q2: 'Planifier',
    export_q3: 'Faire si on a le temps',
    export_q4: 'À piocher si on a le temps et envie',

    // Modale settings
    settings_title: 'Paramètres des quadrants',
    settings_q1_label: 'Quadrant 1 — Urgent & Important',
    settings_q2_label: 'Quadrant 2 — Important & Non urgent',
    settings_q3_label: 'Quadrant 3 — Urgent & Non important',
    settings_q4_label: 'Quadrant 4 — Non urgent & Non important',
    btn_reset: 'Réinitialiser',
    btn_save: 'Enregistrer',
    language_label: 'Langue',

    // Toasts
    toast_file_saved: 'Fichier enregistré !',
    toast_task_deleted: 'Tâche supprimée',
    toast_undo: 'Annuler',

    // Tooltip édition
    task_edit_tooltip: 'Double-cliquer pour modifier',
  },

  en: {
    // Titlebar
    btn_settings_title: 'Settings',
    btn_clear_title: 'Delete all tasks',
    btn_theme_title: 'Toggle theme',
    update_banner: 'Update available',

    // Sidebar gauche
    new_task: 'New task',
    task_placeholder: 'Enter a task...',
    btn_add: 'Add',
    btn_import: 'Import a list',
    unassigned_tasks: 'Unassigned tasks',

    // États vides
    empty_unassigned: 'No pending tasks',
    empty_quadrant: 'Drag a task here',
    empty_priority: 'No tasks',

    // Sidebar droite
    priority_list: 'Priority list',
    btn_export: 'Export',

    // Quadrant labels (fixes)
    q1_label: 'Urgent & Important',
    q2_label: 'Important & Not urgent',
    q3_label: 'Urgent & Not important',
    q4_label: 'Not urgent & Not important',

    // Noms par défaut des quadrants (réinitialisables)
    q1_default: 'Do immediately',
    q2_default: 'Schedule',
    q3_default: 'Delegate - Cancel if no time',
    q4_default: 'Do if time and interest',

    // Priorité droite
    priority_q1: 'Do now',
    priority_q2: 'Schedule',
    priority_q3: 'Delegate',
    priority_q4: 'Pick if time',

    // File drop overlay
    file_drop_label: 'Drop file here',

    // Modale suppression
    confirm_delete_all: 'Are you sure you want to delete all tasks?',
    btn_cancel: 'Cancel',
    btn_delete: 'Delete',

    // Modale mise à jour
    update_available: 'Update available',
    update_later: 'Later',
    update_install: 'Install',
    update_downloading: 'Downloading…',
    update_downloading_pct: (pct) => `Downloading… ${pct}%`,
    update_downloading_kb: (kb) => `Downloading… ${kb} KB`,
    update_installing: 'Installing…',
    update_error: 'Error: ',

    // Modale export
    export_title: 'Export list',
    btn_export_cancel: 'Cancel',
    btn_export_clipboard: 'Copy to clipboard',
    btn_export_download: 'Download .md',
    export_unsorted: 'Unsorted',
    export_q1: 'Do immediately',
    export_q2: 'Schedule',
    export_q3: 'Do if time allows',
    export_q4: 'Do if time and interest',

    // Modale settings
    settings_title: 'Quadrant settings',
    settings_q1_label: 'Quadrant 1 — Urgent & Important',
    settings_q2_label: 'Quadrant 2 — Important & Not urgent',
    settings_q3_label: 'Quadrant 3 — Urgent & Not important',
    settings_q4_label: 'Quadrant 4 — Not urgent & Not important',
    btn_reset: 'Reset',
    btn_save: 'Save',
    language_label: 'Language',

    // Toasts
    toast_file_saved: 'File saved!',
    toast_task_deleted: 'Task deleted',
    toast_undo: 'Undo',

    // Tooltip édition
    task_edit_tooltip: 'Double-click to edit',
  },
};

let currentLang = localStorage.getItem('eisen-lang')
  || (navigator.language.startsWith('fr') ? 'fr' : 'en');

function t(key, ...args) {
  const val = translations[currentLang]?.[key] ?? translations['fr'][key] ?? key;
  return typeof val === 'function' ? val(...args) : val;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    el.title = t(el.dataset.i18nTitle);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  document.documentElement.lang = currentLang;

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('eisen-lang', lang);
  applyTranslations();
  if (typeof resetQuadrantNamesToDefaults === 'function') resetQuadrantNamesToDefaults();
  if (typeof render === 'function') render();
}
