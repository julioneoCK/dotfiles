return {
	"nvim-lualine/lualine.nvim",
	dependencies = { "nvim-tree/nvim-web-devicons" },
	config = function()
		local lualine = require("lualine")

		-- configure lualine with modified theme
		lualine.setup({
			options = {
				theme = "auto",
				disabled_filetypes = { "NvimTree" },
			},
			sections = {
				lualine_a = { "mode" }, -- Solo mostrar el modo de inserción (normal, insert, etc.)
				lualine_b = {},
				lualine_c = { "filename" }, -- Mostrar solo el nombre del archivo actual
				lualine_x = {},
				lualine_y = {},
				lualine_z = {},
			},
		})
	end,
}
