import { Migration } from '@mikro-orm/migrations';

export class Migration20210930144855 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "image" ("id" serial primary key, "img_small" text not null, "captured_by" text not null, "owner_prof" text not null, "owner_name" text not null, "regular_image" text not null);');
  }

}
