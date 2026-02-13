use serde::{Deserialize, Serialize};
use std::fs;
use tauri::Manager;

#[derive(Debug, Serialize, Deserialize, Clone)]
struct Task {
    id: String,
    text: String,
    quadrant: Option<u8>,
    completed: bool,
    #[serde(rename = "createdAt")]
    created_at: String,
}

#[tauri::command]
fn load_tasks(app: tauri::AppHandle) -> Vec<Task> {
    let app_data_dir = app.path().app_data_dir().expect("failed to get app data dir");
    let tasks_path = app_data_dir.join("tasks.json");

    if !tasks_path.exists() {
        return Vec::new();
    }

    match fs::read_to_string(&tasks_path) {
        Ok(content) => serde_json::from_str(&content).unwrap_or_default(),
        Err(_) => Vec::new(),
    }
}

#[tauri::command]
fn save_tasks(app: tauri::AppHandle, tasks: Vec<Task>) -> Result<(), String> {
    let app_data_dir = app.path().app_data_dir().expect("failed to get app data dir");

    fs::create_dir_all(&app_data_dir).map_err(|e| e.to_string())?;

    let tasks_path = app_data_dir.join("tasks.json");
    let json = serde_json::to_string_pretty(&tasks).map_err(|e| e.to_string())?;
    fs::write(&tasks_path, json).map_err(|e| e.to_string())?;

    Ok(())
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![load_tasks, save_tasks])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
