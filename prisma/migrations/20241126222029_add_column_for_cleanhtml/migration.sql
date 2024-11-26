/*
  Warnings:

  - Added the required column `cleanHtml` to the `Newsletter` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Newsletter" ADD COLUMN     "cleanHtml" TEXT NOT NULL;
