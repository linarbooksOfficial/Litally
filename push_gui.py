import os
import sys
import subprocess
import threading
import webbrowser
import tkinter as tk
from tkinter import ttk, messagebox

mingit_cmd = os.path.expandvars(r'%LOCALAPPDATA%\Programs\MinGit\cmd')
gcm_dir = os.path.expandvars(r'%LOCALAPPDATA%\Programs\MinGit\gcm')
git_exe = os.path.join(mingit_cmd, 'git.exe')

os.environ['PATH'] = f"{mingit_cmd};{gcm_dir};" + os.environ.get('PATH', '')

class PushApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Загрузка проекта Litally в GitHub")
        self.root.geometry("620x520")
        self.root.resizable(False, False)
        self.root.configure(bg="#0b0f19")

        # Header
        hdr = tk.Label(root, text="🚀 Загрузка Litally в GitHub", font=("Segoe UI", 16, "bold"), fg="#38bdf8", bg="#0b0f19")
        hdr.pack(pady=(18, 4))

        repo_lbl = tk.Label(root, text="Репозиторий: https://github.com/linarbooksOfficial/Litally", font=("Segoe UI", 9), fg="#94a3b8", bg="#0b0f19", cursor="hand2")
        repo_lbl.pack(pady=(0, 14))
        repo_lbl.bind("<Button-1>", lambda e: webbrowser.open("https://github.com/linarbooksOfficial/Litally"))

        # Status Box
        self.status_box = tk.Text(root, height=12, width=70, bg="#030712", fg="#34d399", font=("Consolas", 9), insertbackground="#fff", relief="flat", padx=10, pady=10)
        self.status_box.pack(pady=6)
        self.log("Готово к отправке! Все файлы закоммичены в локальный git (ветка main).")

        # Action 1: Standard Push
        btn_frame = tk.Frame(root, bg="#0b0f19")
        btn_frame.pack(fill="x", padx=30, pady=8)

        self.btn_push = tk.Button(btn_frame, text="🔑 Вариант А: Отправить (войти через браузер)", font=("Segoe UI", 10, "bold"), bg="#0284c7", fg="#ffffff", activebackground="#0369a1", activeforeground="#ffffff", relief="flat", padx=14, pady=8, cursor="hand2", command=self.start_browser_push)
        self.btn_push.pack(fill="x")

        # Divider / Or
        div = tk.Label(root, text="── ИЛИ ЧЕРЕЗ GITHUB ТОКЕН (100% надёжно без открытия окон) ──", font=("Segoe UI", 8, "bold"), fg="#64748b", bg="#0b0f19")
        div.pack(pady=6)

        # Token Frame
        token_frame = tk.Frame(root, bg="#0b0f19")
        token_frame.pack(fill="x", padx=30, pady=2)

        lbl_tok = tk.Label(token_frame, text="GitHub Personal Access Token (PAT):", font=("Segoe UI", 9), fg="#e2e8f0", bg="#0b0f19")
        lbl_tok.pack(anchor="w")

        tok_row = tk.Frame(token_frame, bg="#0b0f19")
        tok_row.pack(fill="x", pady=4)

        self.entry_token = tk.Entry(tok_row, font=("Segoe UI", 10), bg="#1e293b", fg="#fff", insertbackground="#fff", relief="flat")
        self.entry_token.pack(side="left", fill="x", expand=True, ipady=4, padx=(0, 6))

        btn_token_push = tk.Button(tok_row, text="Отправить с токеном", font=("Segoe UI", 9, "bold"), bg="#10b981", fg="#fff", activebackground="#059669", relief="flat", padx=10, command=self.start_token_push)
        btn_token_push.pack(side="right")

        link_tok = tk.Label(token_frame, text="👉 Нажмите здесь, чтобы создать токен (галочка 'repo') в 1 клик", font=("Segoe UI", 8, "underline"), fg="#38bdf8", bg="#0b0f19", cursor="hand2")
        link_tok.pack(anchor="w", pady=(2, 0))
        link_tok.bind("<Button-1>", lambda e: webbrowser.open("https://github.com/settings/tokens/new?scopes=repo&description=LitallyDeploy"))

    def log(self, text):
        self.status_box.insert(tk.END, text + "\n")
        self.status_box.see(tk.END)

    def start_browser_push(self):
        self.btn_push.config(state="disabled", text="⏳ Отправка... (проверьте браузер)")
        threading.Thread(target=self._run_browser_push, daemon=True).start()

    def _run_browser_push(self):
        self.log("\n[1/2] Запуск git push origin main...")
        cmd = [git_exe, 'push', '-u', 'origin', 'main']
        try:
            p = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True, cwd=os.path.dirname(os.path.abspath(__file__)))
            for line in p.stdout:
                self.log(line.strip())
            p.wait()
            if p.returncode == 0:
                self.log("\n🎉 УСПЕШНО! Все файлы загружены в репозиторий!")
                messagebox.showinfo("Успех!", "Все файлы Litally успешно загружены в ваш GitHub репозиторий!")
                webbrowser.open("https://github.com/linarbooksOfficial/Litally")
            else:
                self.log(f"\nКод завершения: {p.returncode}. Если не открылся браузер, используйте Вариант Б с токеном ниже.")
        except Exception as e:
            self.log(f"Ошибка: {e}")
        finally:
            self.root.after(0, lambda: self.btn_push.config(state="normal", text="🔑 Вариант А: Отправить (войти через браузер)"))

    def start_token_push(self):
        token = self.entry_token.get().strip()
        if not token:
            messagebox.showwarning("Внимание", "Пожалуйста, вставьте GitHub токен в поле ввода!")
            return
        threading.Thread(target=self._run_token_push, args=(token,), daemon=True).start()

    def _run_token_push(self, token):
        self.log("\n[1/2] Отправка через персональный токен...")
        repo_url = f"https://linarbooksOfficial:{token}@github.com/linarbooksOfficial/Litally.git"
        cmd = [git_exe, 'push', '-u', repo_url, 'main']
        try:
            p = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True, cwd=os.path.dirname(os.path.abspath(__file__)))
            for line in p.stdout:
                # Mask token in logs
                clean_line = line.replace(token, '***TOKEN***').strip()
                self.log(clean_line)
            p.wait()
            if p.returncode == 0:
                self.log("\n🎉 УСПЕШНО! Репозиторий полностью обновлен!")
                messagebox.showinfo("Успех!", "Все файлы успешно отправлены в GitHub!")
                webbrowser.open("https://github.com/linarbooksOfficial/Litally")
            else:
                self.log(f"\nОшибка отправки (код {p.returncode}). Проверьте права токена (нужна галочка 'repo').")
        except Exception as e:
            self.log(f"Ошибка: {e}")

if __name__ == '__main__':
    root = tk.Tk()
    app = PushApp(root)
    root.mainloop()
