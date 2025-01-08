import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET() {
  try {
    let privateKey = process.env.APPLE_PRIVATE_KEY;
    const teamId = process.env.APPLE_TEAM_ID;
    const keyId = process.env.APPLE_KEY_ID;

    if (!privateKey || !teamId || !keyId) {
      console.error("Missing required credentials:", {
        hasPrivateKey: !!privateKey,
        hasTeamId: !!teamId,
        hasKeyId: !!keyId,
      });
      return NextResponse.json(
        { error: "Missing Apple Music credentials" },
        { status: 500 },
      );
    }

    // Clean up private key formatting
    privateKey = privateKey.replace(/\\n/g, "\n").replace(/["']/g, "");

    // Ensure key has proper header and footer
    if (!privateKey.includes("-----BEGIN PRIVATE KEY-----")) {
      privateKey = `-----BEGIN PRIVATE KEY-----\n${privateKey}`;
    }
    if (!privateKey.includes("-----END PRIVATE KEY-----")) {
      privateKey = `${privateKey}\n-----END PRIVATE KEY-----`;
    }

    // Log key format for debugging (don't do this in production)
    // console.log("Private key format:", {
    //   length: privateKey.length,
    //   hasHeader: privateKey.includes("BEGIN PRIVATE KEY"),
    //   hasFooter: privateKey.includes("END PRIVATE KEY"),
    //   firstChars: privateKey.substring(0, 27),
    //   lastChars: privateKey.slice(-25),
    // });

    const token = jwt.sign({}, privateKey, {
      algorithm: "ES256",
      expiresIn: "180d",
      issuer: teamId,
      header: {
        alg: "ES256",
        kid: keyId,
        typ: "JWT", // Explicitly specify token type
      },
    });

    // Log token format for debugging (don't log full token in production)
    // console.log("Token format:", {
    //   length: token.length,
    //   parts: token.split(".").length,
    //   headerPart: token.split(".")[0],
    // });

    return NextResponse.json({ token });
  } catch (error) {
    console.error("Token generation error details:", {
      name: error instanceof Error ? error.name : "Unknown error",
      message: error instanceof Error ? error.message : "Unknown error message",
      stack: error instanceof Error ? error.stack : "No stack trace",
    });

    return NextResponse.json(
      { error: "Failed to generate token" },
      { status: 500 },
    );
  }
}
