![Vuetronex CLI](https://raw.githubusercontent.com/vuetronex/cli/master/logo.png "Vuetronex CLI")

# Vuetronex CLI

Build beatiful Electron application with Vue JS, Vue Router, Knex JS, Bookshelf JS & Tailwind CSS. Run database queries right from the Vue Application.

## Installation

Install this package globally.

```bash
$ npm i -g @vuetronex/cli
```

## Usage

Run: `vex --help` or `vex` to get all the command offered with this package.

#### Create Project

```bash
$ vex new project-name
```

#### Create Pages

```bash
$ vex make:page ProductPage

Out:
Page Created: ProductPage.vue
```

You will find the created page inside: `src/pages`.

#### Create Components

```bash
$ vex make:component ProductItem

Out:
Page Component: ProductItem.vue
```

You will find the created component inside: `src/components`.

#### Create Models

```bash
$ vex make:model Product

Out:
Model Created: Product.js
```

You will find the created model inside: `models`.

Optionally you can also use `-m` to make the migration as well.
Also, you can use `-s` to make the seeder at the same go.

#### Create Migrations

```bash
$ vex make:migration product

Out:
Migration Created: 132545626_products.js
```

You will find the created migration inside: `migrations`.

Optionally, you can use `-a` flag if you want alter table migration.

Also, you can use `-s` to make the seeder at the same go.

#### Run Migrations

```bash
$ vex migrate
```

#### Rollback Migrations

```bash
$ vex migrate:rollback
```

#### Create Seeders

```bash
$ vex make:seed product

Out:
Seeder Created: 132545626_products.js
```

You will find the created seeder inside: `seeds`.

#### Running the Seeds

```bash
$ vex seed
```

## Testing

Not done yet. Plans for future.

## Contributing

Please feel free to contribute to this project to better improve this as a community. And also feel free to suggest any features.

## Security

If you discover any security related issues, please email mailtokmahmed@gmail.com instead of using the issue tracker.

## Credits

- [Kazi Mainuddin Ahmed](https://github.com/tzsk)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.