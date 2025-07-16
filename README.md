# Entrelacs Website

This is the landing page for **Entrelacs**, hosted at [https://entrelacs.ai](https://entrelacs.ai).

---

## Getting Started

Follow these steps to set up the site locally.

### 1. Install Ruby

Check if Ruby is installed:

```bash
ruby -v
```

If not installed:

- **macOS:**
  ```bash
  brew install ruby
  ```

- **Ubuntu/Linux:**
  ```bash
  sudo apt-get install ruby-full
  ```

### 2. Install Bundler and Jekyll

Bundler and Jekyll help build and run the site.

```bash
gem install bundler jekyll
```

### 3. Clone the Repository

Clone the website repository from GitHub:

```bash
git clone https://github.com/Entrelacs/entrelacs.ai.git
```

### 4. Install Project Dependencies

Navigate to the project folder:

```bash
cd entrelacs.ai
bundle install
```

### 5. Serve the Site Locally

To run the site locally:

```bash
bundle exec jekyll serve
```

The site will be available at:

```
http://localhost:4000
```

### 6. Build the Site

To build the site without serving:

```bash
bundle exec jekyll build
```

The built site will be in the `_site/` folder.

---

## Deployment

The live site is hosted at:

[https://entrelacs.ai](https://entrelacs.ai)

To deploy manually, upload the contents of the `_site` folder to your hosting service.

---

## Helpful Links


- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [Ruby Installation Guide](https://www.ruby-lang.org/en/documentation/installation/)
