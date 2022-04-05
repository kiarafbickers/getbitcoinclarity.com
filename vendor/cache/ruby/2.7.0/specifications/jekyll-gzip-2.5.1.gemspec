# -*- encoding: utf-8 -*-
# stub: jekyll-gzip 2.5.1 ruby lib

Gem::Specification.new do |s|
  s.name = "jekyll-gzip".freeze
  s.version = "2.5.1"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Phil Nash".freeze]
  s.bindir = "exe".freeze
  s.date = "2021-02-13"
  s.description = "Generate gzipped assets and files for your Jekyll site at build time.".freeze
  s.email = ["philnash@gmail.com".freeze]
  s.homepage = "https://github.com/philnash/jekyll-gzip".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.1.4".freeze
  s.summary = "Generate gzipped assets and files for your Jekyll site at build time".freeze

  s.installed_by_version = "3.1.4" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_runtime_dependency(%q<jekyll>.freeze, [">= 3.0", "< 5.0"])
    s.add_development_dependency(%q<bundler>.freeze, [">= 1.16", "< 3.0"])
    s.add_development_dependency(%q<rake>.freeze, ["~> 13.0.3"])
    s.add_development_dependency(%q<rspec>.freeze, ["~> 3.0"])
    s.add_development_dependency(%q<simplecov>.freeze, ["~> 0.15.1"])
  else
    s.add_dependency(%q<jekyll>.freeze, [">= 3.0", "< 5.0"])
    s.add_dependency(%q<bundler>.freeze, [">= 1.16", "< 3.0"])
    s.add_dependency(%q<rake>.freeze, ["~> 13.0.3"])
    s.add_dependency(%q<rspec>.freeze, ["~> 3.0"])
    s.add_dependency(%q<simplecov>.freeze, ["~> 0.15.1"])
  end
end
