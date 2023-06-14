import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('api/upload')
export class UploadController {
  private readonly bucketName = 'samu975-e-commerce-next';

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file): Promise<string> {
    const s3 = new S3Client({
      region: 'us-east-2',
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
    });
    const ext = file.originalname.split('.').pop();
    const newFilename = `${Date.now()}.${ext}`;

    await s3.send(
      new PutObjectCommand({
        Bucket: this.bucketName,
        Key: newFilename,
        Body: file.buffer,
        ACL: 'public-read',
        ContentType: file.mimetype,
      }),
    );

    const link = `https://${this.bucketName}.s3.amazonaws.com/${newFilename}`;
    return link;
  }
}
