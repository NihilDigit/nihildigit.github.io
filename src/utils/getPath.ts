import { NOTES_PATH } from "@/content.config";
import { slugifyStr } from "./slugify";

/**
 * Get full path of a note entry
 * @param id - id of the note (aka slug)
 * @param filePath - the note's full file location
 * @param includeBase - whether to include `/notes` in return value
 * @returns note path
 */
export function getPath(
  id: string,
  filePath: string | undefined,
  includeBase = true,
) {
  const pathSegments = filePath
    ?.replace(NOTES_PATH, "")
    .split("/")
    .filter((path) => path !== "")
    .filter((path) => !path.startsWith("_"))
    .slice(0, -1)
    .map((segment) => slugifyStr(segment));

  const basePath = includeBase ? "/notes" : "";

  const noteId = id.split("/");
  const slug = noteId.length > 0 ? noteId.slice(-1) : noteId;

  if (!pathSegments || pathSegments.length < 1) {
    return [basePath, slug].join("/");
  }

  return [basePath, ...pathSegments, slug].join("/");
}
