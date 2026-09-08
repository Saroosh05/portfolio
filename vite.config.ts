import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "cv-download-name",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url?.split("?")[0] === "/Saroosh-Javed-CV.pdf") {
            res.setHeader("Content-Disposition", 'attachment; filename="Saroosh-Javed-CV.pdf"')
          }
          next()
        })
      },
      configurePreviewServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url?.split("?")[0] === "/Saroosh-Javed-CV.pdf") {
            res.setHeader("Content-Disposition", 'attachment; filename="Saroosh-Javed-CV.pdf"')
          }
          next()
        })
      },
    },
  ],
})
