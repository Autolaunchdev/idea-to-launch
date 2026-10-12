<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application rules
- Keep prototype data and business calculations in browser-safe domain modules, independent of presentation, so future AI and persistence adapters can replace demo behavior.
- Use a shared React provider with hydration-safe local demo storage; never claim external execution or real authentication in the prototype.
- Define shared React contexts outside component refresh boundaries and pre-optimize interactive UI dependencies so development updates cannot mix context identities or React prebundle generations.
- Give each product area its own TanStack file route and render the shared workspace shell around the root Outlet for consistent navigation.
- Keep all visual styling in the global semantic design system and use shared controls for interactions.
