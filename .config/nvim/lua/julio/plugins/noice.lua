return {
	"folke/noice.nvim",
	config = function()
		require("noice").setup({
			cmdline = {
				view = "cmdline_popup", -- Use the cmdline view for the command-line
			},
			presets = {
				bottom_search = true, -- Enable bottom search view
				command_palette = true, -- Enable command palette view
				lsp_doc_border = true, -- Enable LSP documentation border
			},
		})
	end,
}
