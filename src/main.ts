import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { ValidationPipe } from '@nestjs/common'
import { join } from 'path'
import { NestExpressApplication } from '@nestjs/platform-express'

async function main() {
  const PORT = process.env.PORT ?? ''

  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    rawBody: true,
  })
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  )

  app.enableCors({
    origin: [`http://localhost:${PORT}`],
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    credentials: true,
  })

  const options = new DocumentBuilder()
    .setTitle('User Registration')
    .setDescription('User registration application.')
    .setVersion('1.0')
    .addBearerAuth({
      type: 'http',
      in: 'header',
      description: 'Authorization',
    })
    .build()

  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('swagger', app, document)

  app.useStaticAssets(join(__dirname, '..', 'public'))
  app.setBaseViewsDir(join(__dirname, '..', 'views'))
  app.setViewEngine('hbs')

  await app
    .listen(PORT || 3000)
    .then(() => console.log(`server running on http://localhost:${PORT}`))
}
main()
