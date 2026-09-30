# Muhammad Furqan — Portfolio

A responsive, modern portfolio built with semantic HTML, TailwindCSS (CDN) and a small amount of vanilla JavaScript.

## Why this structure?

The page is intentionally **static and build-free** so it can be deployed directly to Vercel, Netlify, GitHub Pages, or any static hosting service. The HTML is also valid to use as a Thymeleaf template because plain HTML is accepted by Thymeleaf.

### Deploy to Vercel

1. Upload this folder to a GitHub repository, or use Vercel Drop.
2. Import the repository in Vercel.
3. Keep the project as a static site with no build command and no output directory.
4. Deploy.

Vercel currently supports static sites served as-is, and Vercel Drop can deploy a folder containing an `index.html` directly from the browser.

### Use the same frontend with Spring Boot + Thymeleaf

Copy `index.html` into:

`src/main/resources/templates/index.html`

Copy `assets/` into:

`src/main/resources/static/assets/`

Then return the template from a Spring MVC controller, for example:

```java
@GetMapping("/")
public String portfolio() {
    return "index";
}
```

No Thymeleaf expressions are required for the current page. You can add them later for dynamic project data, contact forms, blog posts, or other Spring Boot-backed content.

## Personal links to add

The uploaded resume shows LinkedIn and GitHub labels but does not expose their profile URLs in the parsed content. Add your real profile URLs when you have them rather than using placeholder profiles.
