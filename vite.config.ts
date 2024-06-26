import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import EnvironmentPlugin from "vite-plugin-environment"
import env from "vite-plugin-env-compatible";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), EnvironmentPlugin("all"), env({ prefix: "VITE",  mountedPath: "process.env" }) ]
})
